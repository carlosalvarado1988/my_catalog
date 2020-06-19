import React from "react";
import { map, isEmpty } from "lodash";

import { InvalidLink } from "../partials/InvalidLink";
import { useBusinessInventory } from "../hooks/useBusinessInventory";

export const ProductDescription = React.memo(function Component() {
  const { product } = useBusinessInventory();
  console.log("product: ", product);

  return isEmpty(product) ? (
    <InvalidLink linkType={`Producto`} />
  ) : (
    <div>
      <h1>{product.product_name}</h1>
      <section>
        Images grid
        {map(product.images, (img) => img.url)}
      </section>
      <div>description: {product.description}</div>
      <div>price: {product.price}</div>
    </div>
  );
});
