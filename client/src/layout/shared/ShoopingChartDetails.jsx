import React from "react";
import { Collapse } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectShowShoopingChart } from "../../redux/shopping-chart/selectors";
import { orderMocked } from "../../redux/tempMockData";
const { Panel } = Collapse;

export const ShoopingChartDetails = () => {
  const showShoopingChart = useSelector(selectShowShoopingChart);
  return (
    <Wrapper>
      <Collapse
        className="collapse-container"
        accordion={true}
        bordered={false}
        activeKey={showShoopingChart ? `shopping-cart-details` : null}
      >
        <Panel
          className="panel"
          showArrow={false}
          key={`shopping-cart-details`}
        >
          <section className="item-row title">
            <div>Articulo</div>
            <div>Precio</div>
            <div>Cantidad</div>
            <div>Total</div>
          </section>
          {orderMocked.map((order, i) => (
            <section className="item-row items" key={i}>
              <div>{order.product_name}</div>
              <div>{order.unit_price}</div>
              <div>{order.qty}</div>
              <div>{order.qty * order.unit_price}</div>
            </section>
          ))}
          <section className="item-row grand-total">
            <div></div>
            <div></div>
            <div>Total:</div>
            <div>50</div>
          </section>
        </Panel>
      </Collapse>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: -35px;
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;

  .collapse-container {
    background-color: var(--bg-color-2);
    .panel {
      max-width: var(--max-width-content);
      margin: 0 auto;
      border-bottom: none;
    }
  }
  .item-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 10px;
    margin: 5px 0;
    padding: 15px 0;
    text-align: center;
    font-size: 1.8rem;
    &.title {
      border-bottom: 1.5px solid lightcoral;
      font-size: 2rem;
    }
    &.grand-total {
      border-top: 1.5px solid lightcoral;
      font-size: 2rem;
    }

    > div {
      width: 30%;
      :first-of-type {
        margin-left: 30px;
        text-align: left;
        width: 100%;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 600px) {
    .item-row {
      font-size: 1rem;
      &.title,
      &.items:last-of-type {
        font-size: 1.5rem;
      }
      > div:first-of-type {
        margin-left: 5px;
      }
    }
  }
`;
