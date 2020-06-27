import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { selectShowShoppingCart } from "../../redux/shopping-cart/selectors";
import { Routes } from "../Routes";
import { useBusinessInventory } from "../client-app/hooks/useBusinessInventory";

export const PageContainer = React.memo(function Component() {
  const showShoppingCart = useSelector(selectShowShoppingCart);
  const { valid_product } = useBusinessInventory();
  return (
    <Wrapper hide={showShoppingCart} product_page={valid_product}>
      <Routes />
    </Wrapper>
  );
});

interface Prop {
  hide: boolean;
  product_page: boolean;
}

const Wrapper = styled.main<Prop>`
  display: ${({ hide }) => (hide ? `none` : `block`)};
  padding: 0 30px;
  margin: 0 auto;
  max-width: var(--max-width-content);
  height: calc(100vh - (var(--bar-height-web)));
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 5px 15px;
    height: ${({ product_page }) =>
      product_page
        ? `calc(
      100vh - (var(--search-web-mobile) + var(--bar-height-web-mobile) + var(--counter-add-product-height))
    )`
        : `calc(
      100vh - (var(--search-web-mobile) + var(--bar-height-web-mobile))
    )`};
  }
`;
