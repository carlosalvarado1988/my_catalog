import { produce } from "immer";
import { findIndex, filter } from "lodash";
import { MutableStoreState } from "../root/reducer";

import { getTotalAmountShoopingCart } from "../../common/utils";
import { ShoppingCart, OrderItem } from "../../common/types/api/types";
import { ActionStageEnum } from "../../common/types/api/enums.d";

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

export const removeProductItemToShoppingCartActionReducer = (
  state: DeepReadonlyObject<MutableStoreState>,
  payload: number
) =>
  produce(state, (draft: MutableStoreState) => {
    draft.shoppingCart.items = filter(
      draft.shoppingCart.items || ([] as OrderItem[]),
      (i) => i.product_id !== payload
    ) as OrderItem[];
    // draft.notification = {
    //   show: true,
    //   stage: ActionStageEnum.DONE,
    //   message: "Producto eliminado",
    //   description: "",
    // };
  });
