import React from "react";
import styled from "styled-components";
import { ClientNavBar } from "../client-app/partials/ClientNavBar";

export const NavBarContainer = () => (
  <Wrapper>
    <ClientNavBar />
  </Wrapper>
);

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bar-height-web);
  background-color: var(--bg-color);
  z-index: 10;
  box-shadow: 0 8px 6px -7px lightcoral;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: var(--bar-height-web-mobile);
  }
`;
