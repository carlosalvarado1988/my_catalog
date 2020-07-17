import React from "react";
import styled from "styled-components";

import { DeliveryCardDetails } from "../partials/DeliveryCardDetails";

export const DeliveryOrder = React.memo(function Component() {
  return (
    <Wrapper>
      <DeliveryCardDetails />
    </Wrapper>
  );
});

const Wrapper = styled.main`
  min-height: 100%;
  box-sizing: border-box;
  font-size: var(--text-size-web);

  @media (max-width: 600px) {
    font-size: var(--text-size-mobile);
    padding: 10px 0;
  }
`;
