import React from "react";
import Gallery from "react-grid-gallery";
import { map, isEmpty } from "lodash";
import styled from "styled-components";

import { InvalidLink } from "../partials/InvalidLink";
import { useBusinessInventory } from "../hooks/useBusinessInventory";

export const ProductDescription = React.memo(function Component() {
  const { product } = useBusinessInventory();

  const images = map(product.images, (img, i) => {
    let thumbnailWidth = 320;
    let thumbnailHeight = 100;

    switch (i) {
      case 0:
      case 3:
      case 6:
        thumbnailWidth = 320;
        thumbnailHeight = 174;
        break;
      case 1:
      case 2:
      case 4:
      case 5:
        thumbnailWidth = 100;
        thumbnailHeight = 100;
        break;

      default:
        thumbnailWidth = 320;
        thumbnailHeight = 100;
    }

    return {
      src: img.url,
      thumbnail: img.url,
      thumbnailWidth,
      thumbnailHeight,
    };
  });

  return isEmpty(product) ? (
    <InvalidLink linkType={`Producto`} />
  ) : (
    <Wrapper>
      <h1>{product.product_name}</h1>
      <div className="details-section">
        <div>description: {product.description}</div>
        <div>price: {product.price}</div>
      </div>
      <div className="gallery-section">
        <Gallery images={images} />
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  .gallery-section {
    display: block;
    margin-top: 10px;
  }

  .details-section {
    display: block;
  }
`;
