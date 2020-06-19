import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { startCase } from "lodash";

import { useCurrenNavigation } from "../../shared/hooks/useCurrentNavigation";
import { Category } from "../../../common/types/api/types";
import { selectBusinessCategories } from "../../../redux/business/selectors";

export const CategoryList = () => {
  const { business_slug } = useCurrenNavigation();
  const history = useHistory();
  const categories: Category[] = useSelector(
    selectBusinessCategories
  ) as Category[];

  const goCategory = (newCategorySlug: string) => {
    history.push(`${business_slug}/${newCategorySlug}`);
  };

  return (
    <Wrapper>
      <h1>Categorias</h1>
      <div className="grid-items-list">
        {categories.map((category: Category, i: number) => (
          <section
            className="grid-item"
            key={i}
            onClick={() => goCategory(category.slug)}
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
};

const Wrapper = styled.div`
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;

  .count {
    float: right;
    top: 0;
  }
`;
