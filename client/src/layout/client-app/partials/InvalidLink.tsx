import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { useBusinessInventory } from "../hooks/useBusinessInventory";
import { useCurrenNavigation } from "../../shared/hooks/useCurrentNavigation";
interface Prop {
  linkType: string;
}

export const InvalidLink = React.memo(function Component({ linkType }: Prop) {
  const history = useHistory();
  const { business_slug, category_slug } = useCurrenNavigation();
  const {
    valid_business,
    business_details,
    valid_category,
    category,
  } = useBusinessInventory();

  const goToUrl = () => {
    if (valid_category) {
      return `/${business_slug}/${category_slug}`;
    } else if (valid_business) {
      return `/${business_slug}`;
    }
    return `/`;
  };

  const buttonText = () => {
    if (valid_category) {
      return `Ver Productos en seccion ${category.name} `;
    } else if (valid_business) {
      return `Ver catalogo completo de ${business_details.name} `;
    } else {
      return `go home`;
    }
  };

  const ButtonNav = () => {};

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
