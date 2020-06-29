import React from "react";
import { Badge } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartOutlined, RollbackOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";

import {
  selectShowShoppingCart,
  selectIsEmptyShoppingCart,
  selectItemsCountShoppingCart,
} from "../../../redux/shopping-cart/selectors";
import { toogleShowShoopingCartAction } from "../../../redux/shopping-cart/actions";

export const ShoppingCartIcon = React.memo(function Component() {
  const dispatch = useDispatch();
  const showShoppingCart = useSelector(selectShowShoppingCart);
  const isEmptyShoppingCart = useSelector(selectIsEmptyShoppingCart);
  const itemsCount = useSelector(selectItemsCountShoppingCart);

  return (
    <Wrapper onClick={() => dispatch(toogleShowShoopingCartAction())}>
      <StyledBadge count={showShoppingCart ? 0 : itemsCount}>
        {showShoppingCart ? (
          <StyledRollbackOutlined />
        ) : (
          <StyledShoppingCart added={isEmptyShoppingCart.toString()} />
        )}
      </StyledBadge>
    </Wrapper>
  );
});

const Wrapper = styled.div``;
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
