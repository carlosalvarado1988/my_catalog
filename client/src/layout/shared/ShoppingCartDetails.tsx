import React from "react";
import { Collapse } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
import { isEmpty, map } from "lodash";

import {
  selectShowShoppingCart,
  selectItemsShoppingCart,
} from "../../redux/shopping-cart/selectors";
import { OrderItem } from "../../common/types/api/types";
import { ProceedCheckout } from "../client-app/partials/ProceedCheckout";
import { AddProduct } from "../client-app/partials/AddProduct";
const { Panel } = Collapse;

interface EditItemProp {
  product_id: number;
  product_name: string;
  category_slug: string;
  category_name: string;
  total: number;
}

interface ItemCardProp {
  product_name: string;
  price: number;
  count: number;
  total: number;
}

export const ShoppingCartDetails = React.memo(function Component() {
  const showShoppingCart = useSelector(selectShowShoppingCart);
  const shoppingItems: OrderItem[] = useSelector(
    selectItemsShoppingCart
  ) as OrderItem[];
  const emptyItems = isEmpty(shoppingItems);

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
      <div className="request-delivery">
        <ProceedCheckout />
      </div>
    );

  const ItemCard = ({ product_name, price, count, total }: ItemCardProp) => {
    return (
      <ItemRow>
        <div className="title-name">
          {product_name} <span className="unit-price">- ${price}</span>
        </div>
        <div></div>
        <div className="title-qty">{count}</div>
        <div className="title-total">${total}</div>
      </ItemRow>
    );
  };

  const EditItem = ({
    product_id,
    product_name,
    category_slug,
    category_name,
    total,
  }: EditItemProp) => {
    return (
      <div className="edit-item">
        <div className="details-remove">
          <span>
            <p className="product-name">{product_name}</p>
            <p className="category-name">{category_name}</p>
          </span>
          <div
            className="delete-item"
            onClick={() => console.log("delete item action")}
          >
            <DeleteFilled />
          </div>
        </div>
        <div className="update-item">
          <AddProduct
            product_id={product_id.toString()}
            category_slug={category_slug}
          />
        </div>
      </div>
    );
  };

  const CollapsibleItemsSection = () => {
    return (
      <section>
        {emptyItems && (
          <h5 className="empty-cart">No has agregado un articulo aun</h5>
        )}
        {!emptyItems &&
          map(shoppingItems, (item: OrderItem, i: number) => (
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
                    product_name={item.product_name}
                    count={item.count}
                    price={item.price}
                    total={item.total}
                  />
                }
              >
                <EditItem
                  product_id={item.product_id}
                  product_name={item.product_name}
                  category_slug={item.category_slug}
                  category_name={item.category_name}
                  total={item.total}
                />
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
  box-sizing: border-box;

  .collapse-hidden-container {
    background-color: var(--bg-color-2);
    .panel-hidden-container {
      overflow-y: auto;
      max-width: var(--max-width-content);
      margin: 0 auto;
      border-bottom: none;
      max-height: calc(100vh - var(--bar-height-web));
    }
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

      .ant-collapse-content .ant-collapse-content-active {
        max-height: calc(100vh - 50px);
        background-color: red;
        padding-bottom: 50px;
      }
    }
  }
  .empty-cart {
    text-align: center;
    margin-top: 20px;
  }
  .request-delivery {
    display: flex;
    justify-content: center;
    margin: 20px auto 10px;
  }
  .edit-item {
    .details-remove {
      display: flex;
      justify-content: space-between;
      .product-name {
        color: white;
        font-size: 1.5rem;
      }
      .category-name {
        font-size: 1rem;
        font-style: italic;
      }
      .delete-item {
        margin: 3px 0;
        font-size: 2rem;
        cursor: pointer;
        :hover {
          color: red;
        }
      }
    }
    .update-item {
      margin-top: 65px;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    .collapse-hidden-container {
      .panel-hidden-container {
        max-height: calc(100vh - var(--bar-height-web-mobile));
      }
    }
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

  &.title {
    padding: 10px 0 10px 25px;
    font-size: 2rem;
    margin-bottom: 5px;
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
