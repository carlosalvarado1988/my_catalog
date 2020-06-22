import React, { useMemo } from "react";
import { Carousel } from "antd";
import { isEmpty, get, map } from "lodash";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { InvalidLink } from "../partials/InvalidLink";
import { useBusinessInventory } from "../hooks/useBusinessInventory";
import { Product } from "../../../common/types/api/types";

export const ProductsCategoryList = () => {
  const { business_slug, category, category_slug } = useBusinessInventory();
  const history = useHistory();

  function handleGoProduct(productId: number) {
    history.push(`/${business_slug}/${category_slug}/${productId}`);
  }

  const CategoryName = useMemo(() => get(category, "name", ""), [category]);

  return isEmpty(category) ? (
    <InvalidLink linkType={`Categorias`} />
  ) : (
    <Wrapper id="products-list">
      <header>
        <h1>{CategoryName}</h1>
      </header>
      <main className="grid-items-list">
        {map(category?.products, (product: Product, i: number) => (
          <div className="grid-item" key={i}>
            <div
              className="card"
              onClick={(e) => {
                e.preventDefault();
                handleGoProduct(product.product_id);
              }}
            >
              <Carousel dotPosition={"top"}>
                {map(product.images, (img, i) => {
                  return <img src={img.url} alt="img-1"></img>;
                })}
              </Carousel>
              <div className="details">
                <h5>Product Name</h5>
                <p>
                  This is the description of the product so you can read a
                  little bit about it
                </p>
                <div className="bottom">
                  <h5>$13</h5>
                  <div>Merliot, Santa Tecla</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;

  .grid-item {
    border: unset;
    border-radius: unset;
    :hover,
    :focus {
      border-color: unset;
      background-color: unset;
    }
    img {
      margin-top: -30px;
      object-fit: cover;
      width: 100%;
      height: 278px;
      border-radius: 5px 5px 0 0;
    }

    .details {
      margin-top: 10px;
      padding: 0 15px;
      .bottom {
        border-top: solid 1px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 5px 0;
    .grid-items-list {
      grid-gap: 3rem;
    }
    .grid-item {
      img {
        height: 228px;
      }
      .card {
        padding: 0;
        .ant-carousel .slick-slider .slick-list {
          border-radius: 5px 5px 0 0;
        }
      }
      .details {
        margin-top: 5px;
      }
    }
  }
`;
