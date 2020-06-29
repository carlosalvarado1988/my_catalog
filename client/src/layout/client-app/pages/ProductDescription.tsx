import React from "react";
import Gallery from "react-grid-gallery";
import { map, isEmpty } from "lodash";
import styled from "styled-components";

import { InvalidLink } from "../partials/InvalidLink";
import { useBusinessInventory } from "../hooks/useBusinessInventory";
import { BackNavigationIcon } from "../partials/BackNavigationIcon";

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
      <header className="title">
        <span className="desktop-show-only">
          <BackNavigationIcon />
        </span>
        <h1>{product.product_name}</h1>
      </header>
      <div className="details-section">
        <div>
          <p>{product.description}</p>
        </div>
        <div>
          <h5>Price: {product.price}</h5>
        </div>
      </div>
      <div className="gallery-section">
        <Gallery images={images} />
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
  }
  .gallery-section {
    display: block;
    margin-top: 10px;
  }

  .details-section {
    display: block;
  }
`;
