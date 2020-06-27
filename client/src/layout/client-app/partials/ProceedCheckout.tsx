import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectAmountShoppingCart } from "../../../redux/shopping-cart/selectors";
export const ProceedCheckout = React.memo(function Component() {
  const amount = useSelector(selectAmountShoppingCart);
  return (
    <Wrapper>
      <Button
        className="button"
        type="primary"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Solicitar Entrega / ${amount}
      </Button>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  .button {
    border-radius: 20px;
    /* font-weight: bold; */
    color: white;
  }
`;
