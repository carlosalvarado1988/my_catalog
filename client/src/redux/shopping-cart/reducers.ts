import { produce } from "immer";
import { findIndex, isEmpty } from "lodash";
import { MutableStoreState } from "../root/reducer";
import { getTotalAmountShoopingCart } from "../../common/utils";
import { ShoppingCart, OrderItem } from "../../common/types/api/types";

export const toogleShowShoopingCartActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.showShoppingCart = !draft.showShoppingCart;
  });

export const addProductItemToShoppingCartActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: OrderItem
) =>
  produce(state, (draft: MutableStoreState) => {
    upsertItemInShoppingCart(draft.shoppingCart, payload);
  });

function upsertItemInShoppingCart(
  shoppingCart: ShoppingCart,
  payload: OrderItem
): void {
  const index = findIndex(shoppingCart.items, payload);
  if (isEmpty(index)) {
    shoppingCart.items?.splice(index, 1, payload);
  } else {
    shoppingCart.items?.push(payload);
  }
  shoppingCart.amount = getTotalAmountShoopingCart(shoppingCart.items || []);
}
