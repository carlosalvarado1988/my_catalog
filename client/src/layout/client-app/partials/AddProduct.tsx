import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, InputNumber } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { filter, isEmpty } from "lodash";

import { useBusinessInventory } from "../hooks/useBusinessInventory";
import { addProductItemToShoppingCartAction } from "../../../redux/shopping-cart/actions";
import { selectItemsShoppingCart } from "../../../redux/shopping-cart/selectors";
import { convertNumberToCurrency } from "../../../common/utils";
import { CurrenciesEnum } from "../../../common/types/api/enums.d";

interface Props {
  product_id?: string;
  category_slug?: string;
}

export const AddProduct = React.memo(function Component({
  product_id,
  category_slug,
}: Props) {
  const dispatch = useDispatch();
  const {
    category,
    valid_product,
    product,
    product_url,
  } = useBusinessInventory(product_id, category_slug);
  const itemsShoppingCart = useSelector(selectItemsShoppingCart);

  const productInCart = useMemo(
    () =>
      filter(
        itemsShoppingCart,
        (item) => item.product_id === product.product_id
      ),
    [itemsShoppingCart, product]
  )[0];

  const shouldDisable = () => {
    if (!valid_product) return true;
    if (!isEmpty(productInCart)) {
      return productInCart.count === count;
    }
    return false;
  };

  const initialCount = !isEmpty(productInCart) ? productInCart.count : 1;
  let [count, setCount] = useState(initialCount);
  const calculated_total = count * product.price;
  return (
    <Wrapper>
      <div className="counter">
        <Button
          className="change-number minus-button"
          type="primary"
          onClick={(e) => {
            e.preventDefault();
            if (count > 1) {
              setCount(count - 1);
            }
          }}
        >
          <MinusOutlined />
        </Button>
        <InputNumber
          className="counter-input"
          min={1}
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
      </div>

      <Button
        className="add-item-button"
        type="primary"
        disabled={shouldDisable()}
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            addProductItemToShoppingCartAction({
              product_id: product.product_id,
              product_name: product.product_name,
              price: product.price,
              total: calculated_total,
              category_slug: category.slug,
              category_name: category.name,
              product_url,
              count,
            })
          );
        }}
      >
        {isEmpty(productInCart) ? `Reservar ` : `Actualizar `}
        {`/ ${convertNumberToCurrency(calculated_total, CurrenciesEnum.USD)}`}
      </Button>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .counter {
    .change-number {
      padding: 0;
      height: 40px;
      width: 50px;
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
      font-size: 1.8rem;
      height: 40px;
      min-width: 52px;
      padding: 4px;
      box-sizing: border-box;
      .ant-input-number-input-wrap > input {
        text-align: center;
        color: white;
      }
      .ant-input-number-handler-wrap {
        display: none;
      }
    }
  }
  .add-item-button {
    font-size: 1.8rem;
    border-radius: 20px;
    min-width: 200px;
    margin-left: 20px;
    height: 40px;
  }

  @media (max-width: 600px) {
    display: block;
    text-align: center;
    .counter {
      position: relative;
      margin-top: -48px;
      padding-bottom: 15px;
      .change-number {
        height: 30px;
        width: 30px;
      }
      .counter-input {
        font-size: 1.5rem;
        height: 30px;
        width: 55px;
        padding: 0;
      }
    }
    .add-item-button {
      min-width: 170px;
      height: unset;
      margin-left: unset;
      font-size: 1.4rem;
    }
  }
`;
