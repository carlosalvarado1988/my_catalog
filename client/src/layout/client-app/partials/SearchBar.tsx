import React from "react";
import { Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
const { Search } = Input;

export const SearchBar = React.memo(function Component() {
  const history = useHistory();
  return (
    <Wrapper>
      <StyledLeftOutlined onClick={() => history.goBack()} />
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
    margin: 5px auto;
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
