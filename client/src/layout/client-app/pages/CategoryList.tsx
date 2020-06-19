import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { startCase, map } from "lodash";

import { InvalidLink } from "../partials/InvalidLink";
import { useCurrenNavigation } from "../../shared/hooks/useCurrentNavigation";
import { useBusinessInventory } from "../hooks/useBusinessInventory";
import { Category } from "../../../common/types/api/types.d";

export const CategoryList = React.memo(function Component() {
  const history = useHistory();
  const { business_slug } = useCurrenNavigation();
  const { valid_business, categories } = useBusinessInventory();

  const goCategory = (newCategorySlug: string) => {
    history.push(`${business_slug}/${newCategorySlug}`);
  };

  return !valid_business ? (
    <InvalidLink linkType={`Negocio`} />
  ) : (
    <Wrapper>
      <h1>Categorias</h1>
      <div className="grid-items-list">
        {map(categories, (category: Category, i: number) => (
          <section
            className="grid-item"
            key={i}
            onClick={(e) => {
              e.preventDefault();
              goCategory(category.slug);
            }}
          >
            <div className="card">
              <h5 className="count">{category.products_count}</h5>
              <h3>{startCase(category.name)}</h3>
              <p>{startCase(category.description)}</p>
            </div>
          </section>
        ))}
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;

  .count {
    float: right;
    top: 0;
  }
`;
