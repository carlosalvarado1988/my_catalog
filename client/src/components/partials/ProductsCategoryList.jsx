import React from "react";
import styled from "styled-components";

const products = [
  "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
  "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
  "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
  "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
  "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
];

export const ProductsCategoryList = () => (
  <Wrapper>
    <header>
      <h1>Category</h1>
    </header>
    <main className="grid-items-list">
      {products.map((product) => (
        <div className="grid-item">
          <img src={product} alt="img-1"></img>
          <div className="details">
            <p>Product Name</p>
            <h5>$13</h5>
          </div>
        </div>
      ))}
    </main>
  </Wrapper>
);

const Wrapper = styled.div`
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  .grid-item {
    :hover,
    :focus {
      cursor: pointer;
      border: 1px solid lightcoral;
      box-shadow: 2px 2px 6px -1px lightcoral;
      border-radius: 5px;
    }

    img {
      /* object-fit: contain; */
      object-fit: cover;
      width: 100%;
      height: 218px;
      border-radius: 5px;
    }

    .details {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
    border: unset;
    border-radius: unset;
  }
  @media (max-width: 600px) {
    padding: 5px 0;
    .grid-items-list {
      grid-gap: 0;
    }
    .grid-item {
      border-bottom: 1px solid lightcoral;

      .details {
        margin-top: 5px;
      }
    }
  }
`;
