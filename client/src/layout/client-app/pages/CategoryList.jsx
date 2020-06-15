import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startCase } from "lodash";

import { selectBusinessCategories } from "../../../redux/business/selectors";

export const CategoryList = () => {
  const { businessSlug } = useParams();
  const categories = useSelector(selectBusinessCategories);

  return (
    <Wrapper>
      <h1>Categorias</h1>
      <div className="grid-items-list">
        {categories.map((category, i) => (
          <Link to={`${businessSlug}/${category.slug}`} key={i}>
            <section className="grid-item">
              <div className="card">
                <h5 className="count">{category.products_count}</h5>
                <h3>{startCase(category.name)}</h3>
                <p>{startCase(category.description)}</p>
              </div>
            </section>
          </Link>
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
