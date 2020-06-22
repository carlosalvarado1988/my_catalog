import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, InputNumber } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useBusinessInventory } from "../hooks/useBusinessInventory";
import { addProductItemToShoppingCartAction } from "../../../redux/shopping-cart/actions";

export const AddProduct = React.memo(function Component() {
  const { valid_product, product } = useBusinessInventory();
  const dispatch = useDispatch();
  let [count, setCount] = useState(1);
  return (
    <Wrapper>
      <Button
        className="change-number minus-button"
        type="primary"
        onClick={(e) => {
          e.preventDefault();
          setCount(count - 1);
        }}
      >
        <MinusOutlined />
      </Button>
      <InputNumber
        className="counter-input"
        min={0}
        step={1}
        type="number"
        value={count}
        onChange={(val) => setCount(Number(val))}
      />
      <Button
        className="change-number plus-button"
        type="primary"
        onClick={(e) => {
          e.preventDefault();
          setCount(count + 1);
        }}
      >
        <PlusOutlined />
      </Button>

      <Button
        className="add-item-button"
        type="primary"
        disabled={count === 0 || !valid_product}
        onClick={(e) => {
          e.preventDefault();
          const { product_id, price, product_name } = product;
          dispatch(
            addProductItemToShoppingCartAction({
              product_id,
              price,
              product_name,
              count,
              total: count * price,
            })
          );
        }}
      >
        Reservar
      </Button>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: inline-block;
  .change-number {
    padding: 0;
    height: 30px;
    width: 30px;
    text-align: center;
    &.minus-button {
      border-radius: 40px 0 0 40px;
      margin-right: -1px;
    }
    &.plus-button {
      border-radius: 0 40px 40px 0;
      margin-left: -1px;
    }
  }
  .counter-input {
    height: 30px;
    width: 50px;
    padding: 0;
    .ant-input-number-input-wrap > input {
      text-align: center;
      color: white;
    }
    .ant-input-number-handler-wrap {
      display: none;
    }
  }
  .add-item-button {
    margin-left: 20px;
    border-radius: 20px;
  }
`;
