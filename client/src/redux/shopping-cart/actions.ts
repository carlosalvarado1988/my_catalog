import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("Shooping-cart");
export const toogleShowShoopingCartAction = actionCreator(
  "TOOGLE_SHOW_SHOOPING_CART"
);
