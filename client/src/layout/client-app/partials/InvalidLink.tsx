import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { useBusinessInventory } from "../hooks/useBusinessInventory";
interface Prop {
  linkType: string;
}

export const InvalidLink = React.memo(function Component({ linkType }: Prop) {
  const history = useHistory();
  const {
    valid_business,
    business_slug,
    business_details,
    valid_category,
    category_slug,
    category,
  } = useBusinessInventory();

  return (
    <Wrapper>
      <h4 className="text">El link de {linkType} no es valido</h4>
      {valid_category && (
        <Button
          className="link-button"
          onClick={() => history.replace(`/${business_slug}/${category_slug}`)}
        >
          Ver {category.name}
        </Button>
      )}
      {valid_business && (
        <Button
          className="link-button"
          onClick={() => history.replace(`/${business_slug}`)}
        >
          Ver {business_details.name}
        </Button>
      )}
      {!valid_business && (
        <Button className="link-button" onClick={() => history.replace("/")}>
          Home
        </Button>
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  .text {
    padding: 0 20px;
  }
  .link-button {
    margin-top: 20px;
    background-color: lightcoral;
    opacity: 0.6;

    :hover,
    :focus {
      opacity: 1;
    }
  }
`;
