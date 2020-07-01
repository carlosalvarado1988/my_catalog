import React from "react";
import { Input } from "antd";
import styled from "styled-components";

import { BackNavigationIcon } from "./BackNavigationIcon";
import { useCheckout } from "../hooks/useCheckout";

const { Search } = Input;

export const SearchBar = React.memo(function Component() {
  const { checkoutDelivery } = useCheckout();

  return (
    <Wrapper>
      <div className="mobile-show-only">
        <BackNavigationIcon checkoutDelivery={checkoutDelivery} />
      </div>
      {!checkoutDelivery && (
        <Search
          className="search-button"
          placeholder="Search"
          onSearch={(value) => console.log(value)}
        />
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .search-button {
    width: 100%;
    margin: 10px auto;
    height: 40px;
    border-radius: 50px;
  }

  @media (max-width: 600px) {
    .search-button {
      height: 30px;
    }
  }
`;
