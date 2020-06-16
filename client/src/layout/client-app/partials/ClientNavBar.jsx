import React from "react";
import { Badge } from "antd";
import { LeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";

export const ClientNavBar = () => {
  const paramsInClientNav = useParams();
  const history = useHistory();

  return (
    <Wrapper>
      <div className="left">
        <StyledLeftOutlined
          className="mobile-show-only"
          onClick={() => history.goBack()}
        />
        <div className="brand">
          <p className="pre-title">catalog by: </p>
          <h2 className="bizz-title">Baboon life nad beauty</h2>
        </div>
      </div>

      <div className="order">
        <a href="#order-details" className="shopping-cart">
          <Badge count={3}>
            <StyledShoppingCart />
          </Badge>
        </a>
      </div>
    </Wrapper>
  );
};

const StyledLeftOutlined = styled(LeftOutlined)`
  font-size: 3.2rem;
  margin-right: 20px;
  @media (max-width: 600px) {
    font-size: 2rem;
    margin-right: 10px;
  }
`;

const StyledShoppingCart = styled(ShoppingCartOutlined)`
  font-size: 32px;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width-content);
  margin: 0 auto;
  padding: 15px 30px;
  box-sizing: border-box;
  .left {
    display: flex;
    align-items: center;
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
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 32px;
    .shopping-cart {
      text-decoration: underline;
      color: inherit;
      font-style: none;
    }
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    .bizz-title {
      margin-left: 5px;
      font-size: 1.6rem;
    }
  }
`;
