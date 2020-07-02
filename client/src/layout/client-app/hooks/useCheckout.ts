import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { confirmEnding } from "../../../common/utils";
import { useSelector, useDispatch } from "react-redux";
import { selectDeliveryOrder } from "../../../redux/delivery-order/selectors";
import {
  setItemsCostDeliveryOrderAction,
  setDeliveryTypeCostAction,
} from "../../../redux/delivery-order/actions";
import { selectAmountShoppingCart } from "../../../redux/shopping-cart/selectors";

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
  };
};
