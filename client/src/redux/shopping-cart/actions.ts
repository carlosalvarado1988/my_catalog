import actionCreatorFactory from "typescript-fsa";
import { OrderItem } from "../../common/types/api/types";

const actionCreator = actionCreatorFactory("Shooping-cart");
export const toogleShowShoopingCartAction = actionCreator(
  "TOOGLE_SHOW_SHOOPING_CART"
);

export const addProductItemToShoppingCartAction = actionCreator<OrderItem>(
  "ADD_PRODUCT_SHOPPING_CART"
);

export const removeProductItemToShoppingCartAction = actionCreator<number>(
  "REMOVE_PRODUCT_SHOPPING_CART"
);
