import React from "react";
import styled from "styled-components";

export const HeaderContainer = () => (
  <Wrapper>
    <div className="content">
      <div className="brand">
        <p className="pre-title">Catalog by:</p>
        <h2 className="bizz-title">Baboon life</h2>
      </div>
      <div className="order">
        <button>Carrito</button>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bar-height-web);
  background-color: var(--bg-color);
  z-index: 10;
  box-shadow: 0 8px 6px -7px lightcoral;
  box-sizing: border-box;
  .content {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    text-align: left;
    max-width: var(--max-width-content);
    margin: 0 auto;
    padding: 15px 30px;
    box-sizing: border-box;
  }

  .pre-title {
    font-size: 1rem;
    margin: 0px;
  }
  .bizz-title {
    margin: 0 0 0 10px;
    font-size: 2.5rem;
  }

  .order {
    height: 20px;
  }

  @media (max-width: 600px) {
    height: var(--bar-height-web-mobile);
    .content {
      padding: 10px 10px;
    }

    .bizz-title {
      margin-left: 5px;
      font-size: 1.6rem;
    }
  }
`;
