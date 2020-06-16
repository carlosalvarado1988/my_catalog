import { produce } from "immer";
import { Failure, Success } from "typescript-fsa";
import { MutableStoreState } from "../root/reducer";
import { GetBusinessPayload } from "../../common/types/api/types";
import { ActionStageEnum } from "../../common/types/api/enums.d";

export const getBusinessActionStart = (
  state: DeepReadonlyObject<MutableStoreState>,
  _payload: GetBusinessPayload
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = true;
    draft.loadingBusiness = true;
    draft.notification = {
      show: true,
      stage: ActionStageEnum.STARTED,
      message: "Searching for business",
      description: "please wait...",
      closeUntilResponse: true,
    };
  });

export const getBusinessActionDone = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Success<GetBusinessPayload, any>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
    draft.loadingBusiness = false;
    draft.business = payload.result;
    draft.notification = {
      show: true,
      stage: ActionStageEnum.DONE,
      message: "Horray!",
      closeUntilResponse: false,
    };
  });

export const getBusinessActionFailed = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Failure<any, ErrorEvent>
) => {
  return produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
    draft.loadingBusiness = false;
    draft.notification = {
      show: true,
      stage: ActionStageEnum.FAILED,
      message: payload.error.message,
      description: "please try again...",
      closeUntilResponse: false,
    };
  });
};
