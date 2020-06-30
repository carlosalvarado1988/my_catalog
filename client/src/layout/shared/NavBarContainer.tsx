import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { selectShowShoppingCart } from "../../redux/shopping-cart/selectors";
import { ShoppingBar } from "../client-app/partials/ShoppingBar";
import { SearchBar } from "../client-app/partials/SearchBar";
import { useCheckout } from "../client-app/hooks/useCheckout";

export const NavBarContainer = React.memo(function Component() {
  const showShoppingCart = useSelector(selectShowShoppingCart);
  const { checkoutDelivery } = useCheckout();

  return (
    <Wrapper showingCart={showShoppingCart} checkoutDelivery={checkoutDelivery}>
      <div className="desktop-show-only">
        <ShoppingBar />
      </div>
      <div className="mobile-show-only">
        <SearchBar />
      </div>
    </Wrapper>
  );
});

interface Props {
  showingCart: boolean;
  checkoutDelivery: boolean;
}

const Wrapper = styled.header<Props>`
  display: ${({ checkoutDelivery }) => (checkoutDelivery ? "none" : "block")};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: var(--bar-height-web);
  background-color: ${({ showingCart }) =>
    showingCart ? `var(--bg-color-2)` : "var(--bg-color-1)"};
  box-shadow: 0 8px 6px -7px lightcoral;
  box-sizing: border-box;
  padding: 0 10px;

  @media (max-width: 600px) {
    height: var(--search-web-mobile);
    box-shadow: none;
  }
`;
