import React from "react";
import { useLoadBusiness } from "../hooks/useLoadBusiness";

export const CheckSlug = ({ children }) => {
  const { businessFound, loadingBusiness, error } = useLoadBusiness();
  if (loadingBusiness) return null;

  if (!loadingBusiness && !businessFound) {
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
