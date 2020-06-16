import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectShowShoopingChart } from "../../redux/shopping-chart/selectors";
import { ClientNavBar } from "../client-app/partials/ClientNavBar";

export const NavBarContainer = () => {
  const showShoopingChart = useSelector(selectShowShoopingChart);
  return (
    <Wrapper showingChart={showShoopingChart}>
      <ClientNavBar />
    </Wrapper>
  );
};

interface Props {
  showingChart: boolean;
}

const Wrapper = styled.header<Props>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bar-height-web);
  background-color: ${({ showingChart }) =>
    showingChart ? `var(--bg-color-2)` : "var(--bg-color-1)"};
  z-index: 10;
  box-shadow: 0 8px 6px -7px lightcoral;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: var(--bar-height-web-mobile);
  }
`;
