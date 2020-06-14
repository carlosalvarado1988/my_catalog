import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectBusinessCategories } from "../../../redux/business/selectors";

export const CategoryList = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const categories = useSelector(selectBusinessCategories);

  return (
    <Wrapper>
      <h1>Categorias de Productos</h1>
      <div className="grid-items-list">
        {categories &&
          categories.map((category, i) => (
            <Link to={`${slug}/${category.product_category_id}/products`}>
              <section className="grid-item" key={i}>
                <div className="card">
                  <h5 className="count">{category.products_count}</h5>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
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
