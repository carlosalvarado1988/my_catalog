import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { selectShowShoppingCart } from "../../redux/shopping-cart/selectors";
import { Routes } from "../Routes";

export const PageContainer = React.memo(function Component() {
  const showShoppingCart = useSelector(selectShowShoppingCart);
  return (
    <Wrapper hide={showShoppingCart}>
      <Routes />
    </Wrapper>
  );
});

interface Prop {
  hide: boolean;
}

const Wrapper = styled.main<Prop>`
  display: ${({ hide }) => (hide ? `none` : `block`)};
  padding: 0 30px;
  margin: 0 auto;
  max-width: var(--max-width-content);
  height: calc(100vh - (2 * var(--bar-height-web)));
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: calc(100vh - (2 * var(--bar-height-web-mobile)));
    padding: 5px 15px;
  }
`;
