import { StoreState } from "../root";

export const selectShowShoppingCart = (state: StoreState) =>
  state.showShoppingCart;
export const selectShoppingCart = (state: StoreState) => state.shoppingCart;
