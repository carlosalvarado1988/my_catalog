import React from "react";
import styled from "styled-components";
import { Routes } from "./Routes";

export const PageContainer = () => (
  <Wrapper>
    <Routes />
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 0 30px;
  margin: 0 auto;
  max-width: var(--max-width-content);
  height: calc(100vh - (2 * var(--bar-height-web)));
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: calc(100vh - (2 * var(--bar-height-web-mobile)));
    padding: 5px 15px;
  }
`;
