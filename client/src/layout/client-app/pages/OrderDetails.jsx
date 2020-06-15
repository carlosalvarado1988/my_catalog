import React from "react";
import { map } from "lodash";
import styled from "styled-components";

const orders = [
  {
    item_id: 1,
    product_name: "refrigerador frio-seco multifuncion doble",
    unit_price: 10,
    qty: 3,
  },
  { item_id: 2, product_name: "product name2", unit_price: 4, qty: 3 },
  { item_id: 3, product_name: "product name3", unit_price: 5, qty: 3 },
  {
    item_id: 1,
    product_name: "refrigerador frio-seco multifuncion doble",
    unit_price: 10,
    qty: 3,
  },
  {
    item_id: 1,
    product_name: "refrigerador frio-seco multifuncion doble",
    unit_price: 10,
    qty: 3,
  },
  {
    item_id: 1,
    product_name: "refrigerador frio-seco multifuncion doble",
    unit_price: 10,
    qty: 3,
  },
  {
    item_id: 1,
    product_name: "refrigerador frio-seco multifuncion doble",
    unit_price: 10,
    qty: 3,
  },
];

export const OrderDetails = () => (
  <Wrapper>
    <section className="item-row title">
      <div>Articulo</div>
      <div>Precio</div>
      <div>Cantidad</div>
      <div>Total</div>
    </section>
    {map(orders, (order, i) => (
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
  </Wrapper>
);

const Wrapper = styled.div`
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  /* color: var(--text-color); */
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
