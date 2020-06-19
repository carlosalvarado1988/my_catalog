import { produce } from "immer";
import { MutableStoreState } from "../root/reducer";

export const toogleShowShoopingCartActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.showShoppingCart = !draft.showShoppingCart;
  });
