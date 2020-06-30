import React from "react";
import { DeleteFilled } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Popconfirm, message } from "antd";

import { AddProduct } from "../partials/AddProduct";
import {
  toogleShowShoopingCartAction,
  removeProductItemToShoppingCartAction,
} from "../../../redux/shopping-cart/actions";

interface EditItemProp {
  product_id: number;
  product_name: string;
  category_slug: string;
  category_name: string;
  product_url: string;
}

export const EditItemInCart = React.memo(function Component({
  product_id,
  product_name,
  category_slug,
  category_name,
  product_url,
}: EditItemProp) {
  const history = useHistory();
  const dispatch = useDispatch();

  const goProduct = () => {
    history.push(product_url);
    dispatch(toogleShowShoopingCartAction());
  };

  const removeItem = () => {
    dispatch(removeProductItemToShoppingCartAction(Number(product_id)));
  };

  return (
    <Wrapper>
      <div className="edit-item">
        <div className="details" onClick={() => goProduct()}>
          <span>
            <p className="product-name">{product_name}</p>
            <p className="category-name">{category_name}</p>
          </span>
        </div>
        <div className="update-item">
          <AddProduct
            product_id={product_id.toString()}
            category_slug={category_slug}
          />
        </div>
      </div>
      <div className="delete-item">
        <Popconfirm
          title="Quieres borrar este producto?"
          onConfirm={removeItem}
          okText="Si"
          cancelText="No"
        >
          <DeleteFilled />
        </Popconfirm>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .edit-item {
    align-items: center;
    width: 100%;
    .details {
      cursor: pointer;
      text-align: center;
      :hover {
        opacity: 0.8;
      }
      .product-name {
        color: white;
      }
      .category-name {
        font-style: italic;
        font-size: 1.5rem;
      }
    }
    .update-item {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
  }
  .delete-item {
    margin: 5px 20px 5px 40px;
    font-size: 2rem;
    cursor: pointer;
    :hover {
      color: red;
    }
  }

  @media (max-width: 600px) {
    .edit-item {
      .details {
        .product-name {
          font-size: 1.5rem;
        }
        .category-name {
          font-size: 1rem;
        }
      }
      .update-item {
        margin-top: 65px;
      }
    }
  }
`;
