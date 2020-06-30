import React from "react";
import styled from "styled-components";

import { ShoppingBar } from "../client-app/partials/ShoppingBar";
import { SubmitOrder } from "../client-app/partials/SubmitOrder";

import { useCheckout } from "../client-app/hooks/useCheckout";

export const FooterContainer = React.memo(function Component() {
  const { checkoutDelivery } = useCheckout();
  return (
    <Wrapper checkoutDelivery={checkoutDelivery}>
      <div className="shopping">
        <div className="mobile-show-only">
          <ShoppingBar />
        </div>
      </div>
      <div className="checkout">
        <SubmitOrder />
      </div>
    </Wrapper>
  );
});

interface Props {
  checkoutDelivery: boolean;
}
const Wrapper = styled.footer<Props>`
  display: ${({ checkoutDelivery }) => (checkoutDelivery ? "block" : "none")};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: var(--bar-height-web);
  background-color: var(--bg-color-1);
  box-shadow: 0px 5px 10px 2px lightcoral;
  box-sizing: border-box;

  .shopping {
    display: ${({ checkoutDelivery }) => (checkoutDelivery ? "none" : "block")};
    height: 100%;
  }
  .checkout {
    display: ${({ checkoutDelivery }) => (checkoutDelivery ? "block" : "none")};
    height: 100%;
  }

  @media (max-width: 600px) {
    display: block;
    height: var(--bar-height-web-mobile);
  }
`;
