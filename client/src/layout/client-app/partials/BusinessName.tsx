import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface Props {
  business_slug?: string;
  business_name?: string;
}

export const BusinessName = React.memo(function Component({
  business_slug,
  business_name,
}: Props) {
  const history = useHistory();
  const show = business_slug && business_name;
  return show ? (
    <Wrapper onClick={() => history.push(`/${business_slug}`)}>
      <p className="pre-title">catalog by: </p>
      <h2 className="bizz-title">{business_name}</h2>
    </Wrapper>
  ) : null;
});

const Wrapper = styled.div`
  cursor: pointer;
  :hover,
  :focus {
    opacity: 0.8;
  }
  .pre-title {
    font-size: 1.5rem;
    margin: 0px;
  }
  .bizz-title {
    margin: -5px 0 0 10px;
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    .pre-title {
      font-size: 1rem;
    }
    .bizz-title {
      margin: 0 0 0 5px;
      font-size: 1.6rem;
    }
  }
`;
