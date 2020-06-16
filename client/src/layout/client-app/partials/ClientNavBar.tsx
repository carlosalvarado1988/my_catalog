import React from "react";
import { Badge } from "antd";
import {
  LeftOutlined,
  ShoppingCartOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toogleShowShoopingChartAction } from "../../../redux/shopping-chart/actions";
import { selectShowShoopingChart } from "../../../redux/shopping-chart/selectors";

import styled, { css } from "styled-components";

export const ClientNavBar = () => {
  const dispatch = useDispatch();
  const showShoopingChart = useSelector(selectShowShoopingChart);
  const history = useHistory();

  return (
    <Wrapper showingChart={showShoopingChart}>
      <div className="left">
        <StyledLeftOutlined
          className="mobile-show-only"
          onClick={() => history.goBack()}
        />
        <div className="brand">
          <p className="pre-title">catalog by: </p>
          <h2 className="bizz-title">Baboon life nad beauty</h2>
        </div>
      </div>

      <div
        className="order"
        onClick={() => dispatch(toogleShowShoopingChartAction())}
      >
        <StyledBadge count={showShoopingChart ? null : 3}>
          {showShoopingChart ? (
            <StyledRollbackOutlined />
          ) : (
            <StyledShoppingCart />
          )}
        </StyledBadge>
      </div>
    </Wrapper>
  );
};

const baseIconSizes = css`
  font-size: 3.2rem;
  @media (max-width: 600px) {
    font-size: 2.3rem;
  }
`;

const StyledLeftOutlined = styled(LeftOutlined)`
  ${baseIconSizes}
  margin-right: 10px;
`;
const StyledRollbackOutlined = styled(RollbackOutlined)`
  ${baseIconSizes}
`;
const StyledShoppingCart = styled(ShoppingCartOutlined)`
  ${baseIconSizes}
`;
const StyledBadge = styled(Badge)`
  ${baseIconSizes}
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

interface Props {
  showingChart: boolean;
}
const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width-content);
  height: 100%;
  margin: 0 auto;
  padding: 15px 30px;
  box-sizing: border-box;
  .left {
    display: flex;
    align-items: center;
  }
  .pre-title {
    font-size: 1rem;
    margin: 0px;
  }
  .bizz-title {
    margin: 0 0 0 10px;
    font-size: 2.5rem;
  }

  .order {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 32px;
    color: ${({ showingChart }) => (showingChart ? `inherit` : "blue")};
    .shopping-cart {
      text-decoration: underline;
      color: inherit;
      font-style: none;
    }
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    .bizz-title {
      margin-left: 5px;
      font-size: 1.6rem;
    }
  }
`;
