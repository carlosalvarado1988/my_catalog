import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { AddProduct } from "../partials/AddProduct";
import { SearchBar } from "../partials/SearchBar";
import { ProceedCheckout } from "../partials/ProceedCheckout";
import { ShoppingCartIcon } from "../partials/ShoppingCartIcon";
import { BusinessName } from "../partials/BusinessName";
import { UserAvatar } from "../partials/UserAvatar";
import { useBusinessInventory } from "../hooks/useBusinessInventory";
import { selectShowShoppingCart } from "../../../redux/shopping-cart/selectors";

export const ShoppingBar = React.memo(function Component() {
  const showShoppingCart = useSelector(selectShowShoppingCart);

  const {
    valid_business,
    business_slug,
    business_details,
    valid_product,
  } = useBusinessInventory();

  const showBusinessName =
    valid_business && !valid_product && !showShoppingCart;
  const showAddProduct = valid_product && !showShoppingCart;

  return (
    <Wrapper showingCart={showShoppingCart}>
      <div className="left-section">
        <div className="desktop-show-only">
          <BusinessName
            business_name={business_details.name}
            business_slug={business_slug}
          />
        </div>
        <div className="mobile-show-only">
          <UserAvatar />
        </div>
      </div>

      <div className="center-section">
        <span className="desktop-show-only">
          {!showAddProduct && <SearchBar />}
          {showAddProduct && <AddProduct />}
        </span>
        <div className="mobile-show-only">
          {showBusinessName && (
            <BusinessName
              business_name={business_details.name}
              business_slug={business_slug}
            />
          )}
          {showAddProduct && <AddProduct />}
          {showShoppingCart && <ProceedCheckout />}
        </div>
      </div>

      <div className="right-section">
        <div className="shopping-cart">
          <ShoppingCartIcon />
        </div>
        <div className="desktop-show-only">
          <UserAvatar />
        </div>
      </div>
    </Wrapper>
  );
});

interface Props {
  showingCart: boolean;
}
const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width-content);
  height: 100%;
  margin: 0 auto;
  padding: 15px 30px;
  box-sizing: border-box;

  .right-section {
    float: right;
    display: flex;
    align-items: center;
    .shopping-cart {
      margin-right: 30px;
      background-color: transparent;
      border: 0;
      color: ${({ showingCart }) => (showingCart ? `inherit` : "blue")};
    }
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    .right-section {
      .shopping-cart {
        margin-right: 10px;
      }
    }
  }
`;
