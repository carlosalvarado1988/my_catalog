import { produce } from "immer";
import { MutableStoreState } from "../root/reducer";
import {
  DeliveryTypeEnum,
  PaymentMethodEnum,
} from "../../common/types/api/enums.d";
// import { getTotalAmountShoopingCart } from "../../common/utils";

export const changeDeliveryTypeActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: DeliveryTypeEnum
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.delivery_type = payload;
  });

export const changeDateActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: string
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.date = payload;
  });

export const changeTimeActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: string
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.time = payload;
  });

export const changeCustomerActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: string
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.customer = payload;
  });
export const changePhoneActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: string
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.phone = payload;
  });
export const changeAddressActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: string
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.address = payload;
  });
export const changeAddionalReferenceActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: string
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.additional_reference = payload;
  });

export const setItemsCostDeliveryOrderActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: number
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.items_cost = payload;
  });

export const changePaymentMethodTypeActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: PaymentMethodEnum
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.payment_method = payload;
  });
export const setTotalPayDeliveryOrderActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: number
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.total_pay = payload;
  });
