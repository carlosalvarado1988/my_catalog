import React from "react";
import { Collapse } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";
import { isEmpty, map } from "lodash";

import {
  selectShowShoppingCart,
  selectShoppingCart,
} from "../../redux/shopping-cart/selectors";
// import { shoppingCartMocked } from "../../redux/tempMockData";
import { ShoppingCart, OrderItem } from "../../common/types/api/types";
const { Panel } = Collapse;

export const ShoopingCartDetails = React.memo(function Component() {
  const showShoppingCart = useSelector(selectShowShoppingCart);
  const shoppingCart: ShoppingCart = useSelector(
    selectShoppingCart
  ) as ShoppingCart;
  const emptyItems = isEmpty(shoppingCart.items);

  const TableTitleCart = () =>
    emptyItems ? null : (
      <ItemRow className="title">
        <div>Articulo(s)</div>
        <div></div>
        <div></div>
        <div>Total</div>
      </ItemRow>
    );

  const TotalPayCart = () =>
    emptyItems ? null : (
      <ItemRow className="grand-total">
        <div></div>
        <div></div>
        <div>Total:</div>
        <div>${shoppingCart.amount}</div>
      </ItemRow>
    );

  const ItemCard = ({
    product_id,
    product_name,
    qty,
    unit_price,
  }: OrderItem) => {
    return (
      <ItemRow>
        <div className="title-name">
          {product_name} <span className="unit-price">- ${unit_price}</span>
        </div>
        <div></div>
        <div className="title-qty">{qty}</div>
        <div className="title-total">${qty * unit_price}</div>
      </ItemRow>
    );
  };

  const EditItem = () => {
    return <div className="edit-item">Component for edit quantity</div>;
  };

  const CollapsibleItemsSection = () => {
    return (
      <section>
        {emptyItems && (
          <h5 className="empty-cart">No has agregado un articulo aun</h5>
        )}
        {!emptyItems &&
          map(shoppingCart.items, (item: OrderItem, i: number) => (
            <Collapse
              className="collapse-item-container"
              expandIcon={({ isActive }) => (
                <EditOutlined
                  style={{
                    color: isActive ? "blue" : "inherit",
                  }}
                />
              )}
              key={i}
            >
              <Panel
                className="panel-item-container"
                key={item.product_id}
                header={
                  <ItemCard
                    product_id={item.product_id}
                    product_name={item.product_name}
                    qty={item.qty}
                    unit_price={item.unit_price}
                  />
                }
              >
                <EditItem />
              </Panel>
            </Collapse>
          ))}
      </section>
    );
  };

  return (
    <Wrapper>
      <Collapse
        className="collapse-hidden-container"
        accordion={true}
        bordered={false}
        activeKey={showShoppingCart ? `open-cart` : ``}
      >
        <Panel
          className="panel-hidden-container"
          header={null}
          showArrow={false}
          key={`open-cart`}
        >
          <TableTitleCart />
          <CollapsibleItemsSection />
          <TotalPayCart />
        </Panel>
      </Collapse>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin-top: -35px;
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;

  .collapse-hidden-container {
    background-color: var(--bg-color-2);
    .panel-hidden-container {
      max-width: var(--max-width-content);
      margin: 0 auto;
      border-bottom: none;
    }
  }
  .empty-cart {
    text-align: center;
    margin-top: 20px;
  }
  .collapse-item-container {
    margin-bottom: 5px;
    border: none;
    &:hover {
      background-color: var(--card-color);
    }
    .panel-item-container {
      .ant-collapse-header {
        padding: 10px 0 10px 25px;
        .anticon {
          font-size: 2rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .collapse-item-container {
      .panel-item-container {
        .ant-collapse-header {
          .anticon {
            margin-left: -10px;
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 10px;
  text-align: center;
  font-size: 1.8rem;
  &.title,
  &.grand-total {
    padding: 10px 0 10px 25px;
    /* border-bottom: 1.5px solid lightcoral; */
    font-size: 2rem;
    margin-bottom: 5px;
  }
  &.grand-total {
    margin-top: 5px;
    /* border-top: 1.5px solid lightcoral; */
    border-bottom: none;
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

  @media (max-width: 600px) {
    font-size: 1rem;
    &.title,
    &.items:last-of-type {
      font-size: 1.5rem;
    }
    > div:first-of-type {
      margin-left: 5px;
    }
  }
`;
