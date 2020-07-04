import React from "react";
import styled from "styled-components";

import { DeliveryCardDetails } from "../partials/DeliveryCardDetails";

export const DeliveryOrder = React.memo(function Component() {
  return (
    <Wrapper>
      {/* <h1 className="page-title">Orden de Entrega</h1> */}
      <DeliveryCardDetails />
    </Wrapper>
  );
});

const Wrapper = styled.main`
  min-height: 100%;
  box-sizing: border-box;
  font-size: var(--text-size-web);

  .page-title {
    text-align: center;
  }

  .check-valid {
    position: relative;
    float: right;
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: var(--text-size-mobile);
    padding: 10px 0;
  }
`;
