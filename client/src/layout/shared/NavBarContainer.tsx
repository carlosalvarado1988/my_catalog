import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectShowShoppingCart } from "../../redux/shopping-cart/selectors";
import { ClientNavBar } from "../client-app/partials/ClientNavBar";

export const NavBarContainer = React.memo(function Component() {
  const showShoppingCart = useSelector(selectShowShoppingCart);
  return (
    <Wrapper showingCart={showShoppingCart}>
      <ClientNavBar />
    </Wrapper>
  );
});

interface Props {
  showingCart: boolean;
}

const Wrapper = styled.header<Props>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bar-height-web);
  background-color: ${({ showingCart }) =>
    showingCart ? `var(--bg-color-2)` : "var(--bg-color-1)"};
  z-index: 10;
  box-shadow: 0 8px 6px -7px lightcoral;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: var(--bar-height-web-mobile);
  }
`;
