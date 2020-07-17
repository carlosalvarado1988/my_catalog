import { useEffect, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { confirmEnding } from "../../../common/utils";
import { useSelector, useDispatch } from "react-redux";
import { selectDeliveryOrder } from "../../../redux/delivery-order/selectors";
import {
  setItemsCostDeliveryOrderAction,
  setDeliveryTypeCostAction,
} from "../../../redux/delivery-order/actions";
import { selectAmountShoppingCart } from "../../../redux/shopping-cart/selectors";
import { submitOrderAction } from "../../../redux/delivery-order/actions";
import { genericWordsWithSpacesRegex } from "../../../common/constants";
export const useCheckout = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const checkoutDelivery = useMemo(() => confirmEnding(pathname, "/delivery"), [
    pathname,
  ]);
  const {
    delivery_type,
    date,
    time,
    address,
    additional_reference,
    customer,
    phone,
    payment_method,
    items_cost,
    delivery_type_cost,
    total_pay,
  } = useSelector(selectDeliveryOrder);
  const amount = useSelector(selectAmountShoppingCart);

  useEffect(() => {
    dispatch(setItemsCostDeliveryOrderAction(amount));
    dispatch(setDeliveryTypeCostAction());
  }, [dispatch, amount]);

  const submitOrderInCheckout = useCallback(() => {
    dispatch(
      submitOrderAction.started({
        business_id: 1,
        delivery_type,
        date,
        time,
        address,
        additional_reference,
        customer,
        phone,
        items_cost,
        delivery_type_cost,
        payment_method,
        total_pay,
      })
    );
  }, [
    dispatch,
    delivery_type,
    date,
    time,
    address,
    additional_reference,
    customer,
    phone,
    items_cost,
    delivery_type_cost,
    payment_method,
    total_pay,
  ]);

  const valid_customer_details = useMemo(() => {
    let validName = false;
    let validNumber = false;
    if (
      customer &&
      customer.length > 0 &&
      genericWordsWithSpacesRegex.test(customer)
    ) {
      validName = true;
    }

    if (phone && phone.length === 8) {
      validNumber = true;
    }
    return validName && validNumber;
  }, [customer, phone]);

  const valid_delivery_details = useMemo(() => {
    let validDate = false;
    let validTime = false;
    let validAddress = false;

    if (date && date.length > 0) {
      validDate = true;
    }

    if (time && time.length > 0) {
      validTime = true;
    }

    if (
      address &&
      address.length > 0 &&
      genericWordsWithSpacesRegex.test(address)
    ) {
      validAddress = true;
    }
    return validDate && validTime && validAddress;
  }, [date, time, address]);

  return {
    checkoutDelivery,
    delivery_type,
    date,
    time,
    address,
    additional_reference,
    customer,
    phone,
    payment_method,
    items_cost,
    delivery_type_cost,
    total_pay,
    valid_customer_details,
    valid_delivery_details,
    submitOrderInCheckout,
  };
};
