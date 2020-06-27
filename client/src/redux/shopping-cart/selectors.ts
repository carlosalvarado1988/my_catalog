import { StoreState } from "../root";
import { isEmpty } from "lodash";

export const selectShowShoppingCart = (state: StoreState) =>
  state.showShoppingCart;
export const selectShoppingCart = (state: StoreState) => state.shoppingCart;
export const selectAmountShoppingCart = (state: StoreState) =>
  state.shoppingCart.amount;
export const selectItemsShoppingCart = (state: StoreState) =>
  state.shoppingCart.items;
export const selectItemsCountShoppingCart = (state: StoreState) =>
  state.shoppingCart.items?.length;
export const selectIsEmptyShoppingCart = (state: StoreState) =>
  isEmpty(state.shoppingCart.items);
