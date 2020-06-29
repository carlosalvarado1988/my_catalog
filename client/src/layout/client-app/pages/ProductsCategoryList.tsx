import React, { useMemo } from "react";
import { Carousel } from "antd";
import { isEmpty, get, map } from "lodash";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { InvalidLink } from "../partials/InvalidLink";
import { FavoriteIcon } from "../partials/favoriteIcon";
import { useBusinessInventory } from "../hooks/useBusinessInventory";
import { Product } from "../../../common/types/api/types";
import { convertNumberToCurrency } from "../../../common/utils";
import { CurrenciesEnum } from "../../../common/types/api/enums.d";

export const ProductsCategoryList = () => {
  const { business_slug, category, category_slug } = useBusinessInventory();
  const history = useHistory();

  function handleGoProduct(productId: number) {
    history.push(`/${business_slug}/${category_slug}/${productId}`);
  }

  const CategoryName = useMemo(() => get(category, "name", ""), [category]);

  return isEmpty(category) ? (
    <InvalidLink linkType={`Categorias`} />
  ) : (
    <Wrapper id="products-list">
      <header>
        <h1>{CategoryName}</h1>
      </header>
      <main className="grid-items-list">
        {map(category?.products, (product: Product, i: number) => (
          <div className="grid-item" key={i}>
            <div
              className="card"
              onClick={(e) => {
                if (e.defaultPrevented) {
                  console.log("NO handleGoProduct --> e", e.target);
                  return;
                }
                console.log("handleGoProduct --> e", e.target);
                handleGoProduct(product.product_id);
                e.preventDefault();
              }}
            >
              <div className="img-container">
                <WishListIconOverlay
                  className="wish-icon-overlay"
                  wished={false}
                >
                  <FavoriteIcon wished={false} />
                </WishListIconOverlay>
                <Carousel dotPosition={"top"}>
                  {map(product.images, (img, i) => {
                    return <img src={img.url} alt="img-1" key={i}></img>;
                  })}
                </Carousel>
              </div>
              <div className="details">
                <h5>{product.product_name}</h5>
                <div className="description-shorted">
                  <p>{product.description}</p>
                </div>
                <div className="bottom">
                  <h5 className="price">
                    {convertNumberToCurrency(product.price, CurrenciesEnum.USD)}
                  </h5>
                  <div className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <div className="location-list">
                      <p>{product.location?.join(",")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </Wrapper>
  );
};

interface PropWishIcon {
  wished: boolean;
}
const WishListIconOverlay = styled.div<PropWishIcon>`
  opacity: ${({ wished }) => (wished ? 0.4 : 0)};
`;

const Wrapper = styled.div`
  min-height: 100%;
  padding: 10px 0;
  box-sizing: border-box;

  .grid-item {
    border: unset;
    border-radius: unset;
    :hover,
    :focus {
      border-color: unset;
      background-color: unset;
    }
    .card {
      .img-container {
        position: relative;
        width: 100%;
        :hover .wish-icon-overlay {
          opacity: 0.4;
        }
        .wish-icon-overlay {
          position: absolute;
          top: 5px;
          right: 5px;
          z-index: 10;
          :hover {
            opacity: 1;
          }
        }
        img {
          display: block;
          margin-top: -30px;
          object-fit: cover;
          width: 100%;
          height: 278px;
          border-radius: 5px 5px 0 0;
        }
      }
    }

    .details {
      margin-top: 10px;
      padding: 0 15px;
      .description-shorted {
        margin-bottom: 10px;
        > p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .bottom {
        border-top: solid 1px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          margin: 10px 20px 10px 0;
        }
        .location {
          display: flex;
          align-items: center;
          .location-list {
            margin: 10px 0 10px 10px;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    padding: 5px 0;
    .grid-items-list {
      grid-gap: 3rem;
    }
    .grid-item {
      img {
        height: 228px;
      }
      .card {
        padding: 0;
        .ant-carousel .slick-slider .slick-list {
          border-radius: 5px 5px 0 0;
        }
      }
      .details {
        margin-top: 5px;
      }
    }
  }
`;
