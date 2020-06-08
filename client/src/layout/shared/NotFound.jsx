import React from "react";
import styled from "styled-components";

export const NotFound = () => (
  <Wrapper>
    <div>
      <h1>Page Not Found</h1>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
