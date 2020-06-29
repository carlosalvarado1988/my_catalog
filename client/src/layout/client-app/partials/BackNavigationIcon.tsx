import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

import { selectShowShoppingCart } from "../../../redux/shopping-cart/selectors";
import { toogleShowShoopingCartAction } from "../../../redux/shopping-cart/actions";

export const BackNavigationIcon = React.memo(function Component() {
  const history = useHistory();
  console.log("history: ", history);
  const dispatch = useDispatch();
  const showShoppingChart = useSelector(selectShowShoppingCart);

  const handleBack = () => {
    if (showShoppingChart) {
      dispatch(toogleShowShoopingCartAction());
    } else {
      history.goBack();
    }
  };

  return <StyledLeftOutlined onClick={() => handleBack()} />;
});

const baseIconSizes = css`
  font-size: 3.2rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const StyledLeftOutlined = styled(LeftOutlined)`
  ${baseIconSizes}
  margin-right: 10px;
`;
