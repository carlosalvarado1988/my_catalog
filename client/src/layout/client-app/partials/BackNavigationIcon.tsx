import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LeftOutlined, CloseOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

import { selectShowShoppingCart } from "../../../redux/shopping-cart/selectors";
import { toogleShowShoopingCartAction } from "../../../redux/shopping-cart/actions";

interface Props {
  checkoutDelivery?: boolean;
}
export const BackNavigationIcon = React.memo(function Component({
  checkoutDelivery,
}: Props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const showShoppingChart = useSelector(selectShowShoppingCart);

  const handleBack = () => {
    if (showShoppingChart) {
      dispatch(toogleShowShoopingCartAction());
    } else {
      history.goBack();
    }
  };

  return checkoutDelivery ? (
    <StyledCloseOutlined onClick={() => handleBack()} />
  ) : (
    <StyledLeftOutlined onClick={() => handleBack()} />
  );
});

const baseIconSizes = css`
  font-size: 3.2rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  :hover,
  :focus {
    opacity: 0.8;
  }
`;

const StyledLeftOutlined = styled(LeftOutlined)`
  ${baseIconSizes}
  margin-right: 10px;
`;

const StyledCloseOutlined = styled(CloseOutlined)`
  ${baseIconSizes}
  @media (max-width: 600px) {
    position: fixed;
    margin-top: 15px;
    left: 20px;
  }
`;
