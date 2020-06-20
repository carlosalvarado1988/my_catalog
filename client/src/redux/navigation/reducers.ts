import { produce } from "immer";
import { MutableStoreState } from "../root/reducer";

export const setNavigationTrackCategorySlugActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: string
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.navigationTrack.category_slug = payload;
  });

export const setNavigationTrackProductIdActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: string
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.navigationTrack.product_id = payload;
  });
