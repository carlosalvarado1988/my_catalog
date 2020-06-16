import { produce } from "immer";
import { MutableStoreState } from "../root/reducer";
import { ActionStageEnum } from "../../common/types/api/enums.d";

export const setNotificationActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: string
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.notification = {
      show: true,
      stage: ActionStageEnum.STARTED,
      message: payload,
    };
  });

export const clearNotificationActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.loading = false;
    draft.notification = {
      show: false,
      stage: ActionStageEnum.STARTED,
      message: ``,
      description: ``,
    };
  });
