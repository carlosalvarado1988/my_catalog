import { produce } from "immer";
import { findIndex } from "lodash";
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
    upsertItemInShoppingCart(
      draft.shoppingCart,
      draft.shoppingCart.items || [],
      payload
    );
  });

function upsertItemInShoppingCart(
  shoppingCart: ShoppingCart,
  items: OrderItem[],
  payload: OrderItem
): void {
  const index = findIndex(items, { product_id: payload.product_id });
  if (index >= 0) {
    shoppingCart.items?.splice(index, 1, payload);
  } else {
    shoppingCart.items?.push(payload);
  }
  shoppingCart.amount = getTotalAmountShoopingCart(shoppingCart.items || []);
}
