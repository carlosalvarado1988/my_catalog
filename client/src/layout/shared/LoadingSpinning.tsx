import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/root/selectors";
import styled from "styled-components";

export const LoadingSpinning = React.memo(function Component() {
  const loading = useSelector(selectIsLoading);
  // const loadingBusiness = useSelector(selectIsLoadingBusiness);

  return (
    <Wrapper show={loading}>
      <div className="container">
        <Spin size="large" />
        {/* <h5 className="text">{loadingBusiness && "Loading Business"}</h5> */}
      </div>
    </Wrapper>
  );
});

interface StyledProps {
  show: boolean;
}

const Wrapper = styled.div<StyledProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: calc(50% - 40px);
  left: calc(50% - 100px);
  .container {
    display: block;
    text-align: center;
    height: 80px;
    width: 200px;
    .text {
      margin-top: 15px;
    }
    @media (max-width: 900px) {
      .text {
        margin-top: 10px;
      }
    }
  }
`;
