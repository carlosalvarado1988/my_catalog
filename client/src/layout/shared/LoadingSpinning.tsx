import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectIsAuthorizing,
} from "../../redux/root/selectors";
import styled from "styled-components";

export const LoadingSpinning = () => {
  const loading = useSelector(selectIsLoading);
  const authorizing = useSelector(selectIsAuthorizing);

  return (
    <Wrapper show={loading}>
      <div className="container">
        spinnig here
        <h5 className="text">{authorizing && "Authorizing"}</h5>
      </div>
    </Wrapper>
  );
};

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
