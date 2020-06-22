import React from "react";
import { Badge } from "antd";
import { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
import { ShoppingCartOutlined, RollbackOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";

import { AddProduct } from "../partials/AddProduct";
import { useBusinessInventory } from "../hooks/useBusinessInventory";
import {
  selectShowShoppingCart,
  selectShoppingCart,
} from "../../../redux/shopping-cart/selectors";
import { toogleShowShoopingCartAction } from "../../../redux/shopping-cart/actions";

export const ShoppingBar = React.memo(function Component() {
  const dispatch = useDispatch();
  const history = useHistory();
  const showShoppingCart = useSelector(selectShowShoppingCart);
  const { items } = useSelector(selectShoppingCart);
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

  return (
    <Wrapper showingCart={showShoppingCart}>
      <div className="left">
        {valid_business && !valid_product && <BusinessName />}
        {valid_product && <AddProduct />}
      </div>

      <div
        className="order"
        onClick={() => dispatch(toogleShowShoopingCartAction())}
      >
        <StyledBadge count={showShoppingCart ? 0 : items?.length}>
          {showShoppingCart ? (
            <StyledRollbackOutlined />
          ) : (
            <StyledShoppingCart added={isEmpty(items).toString()} />
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
  .left {
    display: flex;
    align-items: center;
  }
  .pre-title {
    font-size: 1rem;
    margin: 0px;
  }
  .bizz-title {
    margin: 0 0 0 10px;
    font-size: 2.5rem;
  }

  .order {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 32px;
    color: ${({ showingCart }) => (showingCart ? `inherit` : "blue")};
    .shopping-cart {
      text-decoration: underline;
      color: inherit;
      font-style: none;
    }
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    .bizz-title {
      margin-left: 5px;
      font-size: 1.6rem;
    }
  }
`;
