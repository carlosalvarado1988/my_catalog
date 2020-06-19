import React from "react";
import { InvalidLink } from "../partials/InvalidLink";
import { useLoadBusiness } from "../hooks/useLoadBusiness";

export const CheckSlug = React.memo(function Component({ children }) {
  const { loading_business, business_found } = useLoadBusiness();

  if (loading_business) return null;

  if (!loading_business && !business_found) {
    return <InvalidLink linkType={`Negocio`} />;
  }

  return children;
});
