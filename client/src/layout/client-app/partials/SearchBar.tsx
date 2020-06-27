import React from "react";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { selectShowShoppingCart } from "../../../redux/shopping-cart/selectors";
import { toogleShowShoopingCartAction } from "../../../redux/shopping-cart/actions";

const { Search } = Input;

export const SearchBar = React.memo(function Component() {
  const history = useHistory();
  const dispatch = useDispatch();
  const showShoppingChart = useSelector(selectShowShoppingCart);

  const handleBack = () => {
    console.log("showShoppingChart: ", showShoppingChart);
    if (showShoppingChart) {
      console.log("dispatch: toogleShowShoopingCartAction");
      dispatch(toogleShowShoopingCartAction());
    } else {
      history.goBack();
    }
  };

  return (
    <Wrapper>
      <StyledLeftOutlined onClick={() => handleBack()} />
      <Search
        className="search-button"
        placeholder="Search"
        onSearch={(value) => console.log(value)}
      />
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
    height: 30px;
    border-radius: 50px;
  }
`;

const baseIconSizes = css`
  font-size: 3.2rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const StyledLeftOutlined = styled(LeftOutlined)`
  ${baseIconSizes}
  margin-right: 10px;
`;
