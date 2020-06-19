import React from "react";
import styled from "styled-components";

import { ShoppingBar } from "../client-app/partials/ShoppingBar";

export const FooterContainer = React.memo(function Component() {
  return (
    <Wrapper>
      <div className="mobile-show-only">
        <ShoppingBar />
      </div>
      <div className="desktop-show-only"></div>
    </Wrapper>
  );
});

const Wrapper = styled.footer`
  display: none;
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

  @media (max-width: 600px) {
    display: block;
    height: var(--bar-height-web-mobile);
  }
`;
