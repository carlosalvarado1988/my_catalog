import React from "react";
import styled from "styled-components";

import { SignIn } from "../dashboard-app/pages/SignIn";
import { CategoryList } from "../client-app/pages/CategoryList";
import { ProductsCategoryList } from "../client-app/pages/ProductsCategoryList";
import { OrderDetails } from "../client-app/pages/OrderDetails";
import { DeliveryOrder } from "../client-app/pages/DeliveryOrder";

export const PageContainer = () => (
  <Wrapper>
    <SignIn />
    <CategoryList />
    <ProductsCategoryList />
    <OrderDetails />
    <DeliveryOrder />
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 0 30px;
  margin: 0 auto;
  max-width: var(--max-width-content);
  height: calc(100vh - (2 * var(--bar-height-web)));
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: calc(100vh - (2 * var(--bar-height-web-mobile)));
    padding: 5px 15px;
  }
`;
