import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Badge } from "antd";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import {
  ShoppingCartOutlined,
  RollbackOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { AddProduct } from "../partials/AddProduct";
import { ProceedCheckout } from "../partials/ProceedCheckout";
import { useBusinessInventory } from "../hooks/useBusinessInventory";
import {
  selectShowShoppingCart,
  selectIsEmptyShoppingCart,
  selectItemsCountShoppingCart,
} from "../../../redux/shopping-cart/selectors";
import { toogleShowShoopingCartAction } from "../../../redux/shopping-cart/actions";

export const ShoppingBar = React.memo(function Component() {
  const dispatch = useDispatch();
  const history = useHistory();
  const showShoppingCart = useSelector(selectShowShoppingCart);
  const isEmptyShoppingCart = useSelector(selectIsEmptyShoppingCart);
  const itemsCount = useSelector(selectItemsCountShoppingCart);

  const {
    valid_business,
    business_slug,
    business_details,
    valid_product,
  } = useBusinessInventory();

  const BusinessName = () => (
    <div className="brand" onClick={() => history.push(`/${business_slug}`)}>
      <p className="pre-title">catalog by: </p>
      <h2 className="bizz-title">{business_details.name}</h2>
    </div>
  );
  const showBusinessName =
    valid_business && !valid_product && !showShoppingCart;
  const showAddProduct = valid_product && !showShoppingCart;

  return (
    <Wrapper showingCart={showShoppingCart}>
      <div className="user-avatar">
        <Avatar icon={<UserOutlined />} />
      </div>

      <div className="center-dynamic-section">
        {showBusinessName && <BusinessName />}
        {showAddProduct && <AddProduct />}
        {showShoppingCart && <ProceedCheckout />}
      </div>

      <div
        className="shopping-cart"
        onClick={() => dispatch(toogleShowShoopingCartAction())}
      >
        <StyledBadge count={showShoppingCart ? 0 : itemsCount}>
          {showShoppingCart ? (
            <StyledRollbackOutlined />
          ) : (
            <StyledShoppingCart added={isEmptyShoppingCart.toString()} />
          )}
        </StyledBadge>
      </div>
    </Wrapper>
  );
});

const baseIconSizes = css`
  font-size: 3.2rem;
  @media (max-width: 600px) {
    font-size: 2.3rem;
  }
`;

const StyledRollbackOutlined = styled(RollbackOutlined)`
  ${baseIconSizes}
`;
interface Prop {
  added: string;
}
const StyledShoppingCart = styled(ShoppingCartOutlined)<Prop>`
  ${baseIconSizes}
  color: ${({ added }) => (added === "true" ? "inherit" : "white")};
`;
const StyledBadge = styled(Badge)`
  ${baseIconSizes}
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

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

  .user-avatar {
    display: flex;
    align-items: center;
  }

  .center-dynamic-section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    .brand {
      .pre-title {
        font-size: 1rem;
        margin: 0px;
      }
      .bizz-title {
        margin: 0 0 0 10px;
        font-size: 2.5rem;
      }
    }
  }
  .shopping-cart {
    margin-right: 10px;
    background-color: transparent;
    border: 0;
    color: ${({ showingCart }) => (showingCart ? `inherit` : "blue")};
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    .center-dynamic-section .brand .bizz-title {
      margin-left: 5px;
      font-size: 1.6rem;
    }
  }
`;
