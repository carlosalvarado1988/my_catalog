import { produce } from "immer";
import { MutableStoreState } from "../root/reducer";
import { Failure, Success } from "typescript-fsa";

import {
  DeliveryTypeEnum,
  PaymentMethodEnum,
  ActionStageEnum,
} from "../../common/types/api/enums.d";
import { DeliveryOrder } from "../../common/types/api/types.d";

// import { getTotalAmountShoopingCart } from "../../common/utils";

export const changeDeliveryTypeActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: DeliveryTypeEnum
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.delivery_type = payload;
    draft.deliveryOrder.total_pay = getTotalPay(
      draft.business.business_settings?.delivery_settings.delivery_cost,
      payload,
      draft.deliveryOrder.items_cost
    );
    draft.deliveryOrder.delivery_type_cost = getDeliveryTypeCost(
      payload,
      draft.business.business_settings?.delivery_settings.delivery_cost
    );
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
    draft.deliveryOrder.total_pay = getTotalPay(
      draft.business.business_settings?.delivery_settings.delivery_cost,
      draft.deliveryOrder.delivery_type,
      payload
    );
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

export const setDeliveryTypeCostActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.deliveryOrder.delivery_type_cost = getDeliveryTypeCost(
      draft.deliveryOrder.delivery_type,
      draft.business.business_settings?.delivery_settings.delivery_cost
    );
  });

export const submitOrderActionReducerStart = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: DeliveryOrder
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = true;
    draft.notification = {
      show: true,
      closeUntilResponse: true,
      stage: ActionStageEnum.STARTED,
      message: "Su orden esta siendo envianda",
      description: "por favor, espere ...",
    };
  });

export const submitOrderActionReducerDone = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Success<DeliveryOrder, any>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
    draft.notification = {
      show: true,
      closeUntilResponse: true,
      stage: ActionStageEnum.DONE,
      message: "Su orden se envio con exito",
      description: `${draft.business.name} se comunicara con ud en breve si surge alguna duda.`,
    };
  });

export const submitOrderActionReducerFailed = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Failure<any, ErrorEvent>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.notification = {
      show: true,
      closeUntilResponse: true,
      stage: ActionStageEnum.FAILED,
      message: "Algo fallo en la red",
      description: `por favor, verifique su informacion e intente de nuevo, o llame directamente al: ${draft.business.phone}`,
    };
  });

function getTotalPay(
  delivery_cost: number = 0,
  delivery_type: DeliveryTypeEnum,
  items_cost: number
): number {
  if (delivery_type === DeliveryTypeEnum.DELIVERY) {
    return items_cost + delivery_cost;
  } else {
    return items_cost;
  }
}

function getDeliveryTypeCost(
  delivery_type: DeliveryTypeEnum,
  delivery_cost: number = 0
): number {
  if (delivery_type === DeliveryTypeEnum.DELIVERY) {
    return delivery_cost;
  } else {
    return 0;
  }
}
