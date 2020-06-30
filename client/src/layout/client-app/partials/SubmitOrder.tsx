import React from "react";
import { Button } from "antd";
import styled from "styled-components";

export const SubmitOrder = React.memo(function Component() {
  return (
    <Wrapper>
      <Button className="submit-order" type="primary" disabled={true}>
        Completar
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
