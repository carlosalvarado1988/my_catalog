import { produce } from "immer";
import { Failure, Success } from "typescript-fsa";
import { MutableStoreState } from "../root/reducer";
import { GetBusinessPayload } from "../../common/types/api/types";

export const getBusinessActionStart = (
  state: DeepReadonlyObject<MutableStoreState>,
  _payload: GetBusinessPayload
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = true;
    draft.loadingBusiness = true;
  });

export const getBusinessActionDone = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Success<GetBusinessPayload, any>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
    draft.loadingBusiness = false;
    draft.business = payload.result;
  });

export const getBusinessActionFailed = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: Failure<any, ErrorEvent>
) => {
  return produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
    draft.loadingBusiness = false;
    draft.error = payload.error;
  });
};
