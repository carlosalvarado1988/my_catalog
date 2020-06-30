import { useLocation } from "react-router-dom";
import { confirmEnding } from "../../../common/utils";

export const useCheckout = () => {
  const { pathname } = useLocation();
  const checkoutDelivery = confirmEnding(pathname, "/delivery");
  return { checkoutDelivery };
};
