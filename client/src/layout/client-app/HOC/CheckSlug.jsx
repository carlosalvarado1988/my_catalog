import React from "react";
import { FindBusinessAccount } from "../pages/FindBusinessAccount";
import { useLoadBusiness } from "../hooks/useLoadBusiness";

export const CheckSlug = ({ children }) => {
  const { businessFound, loadingBusiness } = useLoadBusiness();
  if (loadingBusiness) return null;

  if (!loadingBusiness && !businessFound) {
    return <FindBusinessAccount />;
  }
  // check redux for shoppingCart open, so return null
  return children;
};
