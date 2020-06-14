import React from "react";
import { useLoadBusiness } from "./useLoadBusiness";

export const CheckSlug = ({ children }) => {
  const { found, loadingBusiness, error } = useLoadBusiness();
  if (loadingBusiness) return null;

  if (!loadingBusiness && !found) {
    return (
      <>
        {error && <h5>{error.message}</h5>}
        <h1>Find the business</h1>
        <input type="text"></input>
      </>
    );
  }

  return children;
};
