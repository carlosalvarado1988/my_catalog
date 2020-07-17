import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { useCheckout } from "../hooks/useCheckout";

export const SubmitOrder = React.memo(function Component() {
  const {
    valid_customer_details,
    valid_delivery_details,
    items_cost,
    submitOrderInCheckout,
  } = useCheckout();

  return (
    <Wrapper>
      <Button
        className="submit-order"
        type="primary"
        disabled={
          !valid_customer_details || !valid_delivery_details || items_cost === 0
        }
        onClick={() => submitOrderInCheckout()}
      >
        Confirmar
      </Button>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .submit-order {
    border-radius: 20px;
    font-size: 2rem;
    padding: 0 40px;
  }
`;
