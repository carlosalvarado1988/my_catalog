import actionCreatorFactory, { Action } from "typescript-fsa";
import {
  GetBusinessPayload,
  SubmitOrderPayload,
  ResponseOrderPayload,
} from "../../common/types/api/types";

const actionCreator = actionCreatorFactory("Business");

export const getBusinessAction = actionCreator.async<
  GetBusinessPayload,
  any,
  ErrorEvent
>("GET_BUSINESS");
export type GetBusinessActionType = Action<GetBusinessPayload>;

export const submitPaymentMethodAction = actionCreator.async<
  SubmitOrderPayload,
  ResponseOrderPayload,
  ErrorEvent
>("SUBMIT_ORDER_METHOD");
export type SubmitOrderActionType = Action<SubmitOrderPayload>;

export const setCurrentCategoryAction = actionCreator<number>(
  "SET_CURRENT_CATEGORY"
);
