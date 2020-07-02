import actionCreatorFactory from "typescript-fsa";
import {
  DeliveryTypeEnum,
  PaymentMethodEnum,
} from "../../common/types/api/enums.d";

const actionCreator = actionCreatorFactory("Delivery-order");

export const changeDeliveryTypeAction = actionCreator<DeliveryTypeEnum>(
  "CHANGE_DELIVERY_TYPE"
);

export const changeDateAction = actionCreator<string>("CHANGE_DATE");
export const changeTimeAction = actionCreator<string>("CHANGE_TIME");

export const changeCustomerAction = actionCreator<string>("CHANGE_CUSTOMER");
export const changePhoneAction = actionCreator<string>("CHANGE_PHONE");
export const changeAddressAction = actionCreator<string>("CHANGE_ADDRESS");
export const changeAddionalReferenceAction = actionCreator<string>(
  "CHANGE_ADDITIONAL_REFERENCE"
);

export const setItemsCostDeliveryOrderAction = actionCreator<number>(
  "SET_ITEMS_COST"
);
export const changePaymentMethodTypeAction = actionCreator<PaymentMethodEnum>(
  "CHANGE_PAYMENT_METHOD"
);

export const setTotalPayDeliveryOrderAction = actionCreator<number>(
  "SET_TOTAL_PAY"
);

export const setDeliveryTypeCostAction = actionCreator("SET_DELIVERY_COST");
