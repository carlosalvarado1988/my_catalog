import { useMemo } from "react";
import { useSelector } from "react-redux";
import { isEmpty, filter } from "lodash";

import {
  selectCategorySlug,
  selectProductId,
} from "../../../redux/navigation/selectors";
import { selectBusiness } from "../../../redux/business/selectors";
import { Business, Category, Product } from "../../../common/types/api/types";

export const useBusinessInventory = (
  product_id?: string | null,
  category_slug?: string | null
) => {
  const product_id_redux: string | null = useSelector(selectProductId);
  const category_slug_redux: string | null = useSelector(selectCategorySlug);
  const productId = product_id || product_id_redux;
  const categorySlug = category_slug || category_slug_redux;

  const {
    business_account_id,
    name,
    slug,
    address,
    additional_reference,
    description,
    categories,
    business_settings,
  }: Business = useSelector(selectBusiness) as Business;

  const business_details = useMemo(
    () => ({
      business_account_id,
      name,
      slug,
      address,
      additional_reference,
      description,
      business_settings,
    }),
    [
      business_account_id,
      name,
      slug,
      address,
      additional_reference,
      description,
      business_settings,
    ]
  );

  const category: Category = useMemo(() => {
    return isEmpty(categorySlug)
      ? ({} as Category)
      : (filter(
          categories,
          (cat: Category) => cat.slug === categorySlug
        )[0] as Category) || ({} as Category);
  }, [categories, categorySlug]);

  const product: Product = useMemo(() => {
    return isEmpty(productId)
      ? ({} as Product)
      : filter(
          category.products,
          (prod: Product) => prod.product_id.toString() === productId
        )[0] || ({} as Product);
  }, [category, productId]);

  const valid_business: boolean = !isEmpty(categories);
  const valid_category: boolean = !isEmpty(category);
  const valid_product: boolean = !isEmpty(product);

  let product_url = "";
  if (valid_business && valid_category && valid_product) {
    product_url = `/${business_details?.slug}/${categorySlug}/${productId}`;
  }

  return {
    valid_business,
    business_slug: business_details?.slug,
    business_details,
    categories,
    valid_category,
    category_slug: categorySlug,
    category,
    valid_product,
    product,
    product_id: productId,
    product_url,
  };
};
