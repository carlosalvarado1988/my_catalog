import React from "react";
import styled from "styled-components";
import { isEmpty } from "lodash";
import { useProductsCategory } from "../hooks/useProductsCategory";

export const ProductsCategoryList = () => {
  const { category } = useProductsCategory();

  const loading = isEmpty(category);
  return loading ? null : (
    <Wrapper id="products-list">
      <header>
        <h1>{category.name}</h1>
      </header>
      <main className="grid-items-list">
        {category.products.map((product, i) => (
          <div className="grid-item" key={i}>
            <div className="card">
              <img src={product} alt="img-1"></img>
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
    /* padding-top: 30px; */
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
      border-radius: 5px;
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
        margin-top: -15px;
        height: 228px;
      }
      .card {
        padding: 5px;
      }
      .details {
        margin-top: 5px;
      }
    }
  }
`;
