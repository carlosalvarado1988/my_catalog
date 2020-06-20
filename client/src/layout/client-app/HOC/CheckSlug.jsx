import React from "react";
import { InvalidLink } from "../partials/InvalidLink";
import { useLoadBusiness } from "../hooks/useLoadBusiness";
import { useCurrenNavigation } from "../../shared/hooks/useCurrentNavigation";

export const CheckSlug = React.memo(function Component({ children }) {
  useCurrenNavigation();
  const { loading_business, business_found } = useLoadBusiness();

  if (loading_business) return null;

  if (!loading_business && !business_found) {
    return <InvalidLink linkType={`Negocio`} />;
  }

  return children;
});
