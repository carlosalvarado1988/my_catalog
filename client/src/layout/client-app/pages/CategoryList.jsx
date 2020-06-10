import React from "react";
import styled from "styled-components";

const categories = [
  {
    category_id: 1,
    category_name: "ropa",
    products_count: 10,
    category_description: "this is a category for",
  },
  {
    category_id: 2,
    category_name: "belleza",
    products_count: 2,
    category_description: "this is a category for",
  },
  {
    category_id: 3,
    category_name: "salud",
    products_count: 5,
    category_description: "this is a category for",
  },
  {
    category_id: 4,
    category_name: "carros",
    products_count: 3,
    category_description: "this is a category for",
  },
];
export const CategoryList = () => (
  <Wrapper>
    <h1>Categorias de Productos</h1>
    <div className="grid-items-list">
      {categories.map((category) => (
        <section className="grid-item">
          <div className="card">
            <h5 className="count">{category.products_count}</h5>
            <h3>{category.category_name}</h3>
            <p>{category.category_description}</p>
          </div>
        </section>
      ))}
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;

  .count {
    float: right;
    top: 0;
  }
`;
