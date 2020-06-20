import { useMemo } from "react";
import { useSelector } from "react-redux";
import { isEmpty, filter } from "lodash";

import {
  selectCategorySlug,
  selectProductId,
} from "../../../redux/navigation/selectors";
import { selectBusiness } from "../../../redux/business/selectors";

import { Business, Category, Product } from "../../../common/types/api/types";

export const useBusinessInventory = () => {
  const category_slug_redux = useSelector(selectCategorySlug);
  const product_id_redux = useSelector(selectProductId);

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
    return isEmpty(category_slug_redux)
      ? ({} as Category)
      : (filter(
          categories,
          (cat: Category) => cat.slug === category_slug_redux
        )[0] as Category) || ({} as Category);
  }, [categories, category_slug_redux]);

  const product: Product = useMemo(() => {
    return isEmpty(product_id_redux)
      ? ({} as Product)
      : filter(
          category.products,
          (prod: Product) =>
            prod.product_id.toString() === product_id_redux?.toString()
        )[0] || ({} as Product);
  }, [category, product_id_redux]);

  const valid_business: boolean = !isEmpty(categories);
  const valid_category: boolean = !isEmpty(category);
  const valid_product: boolean = !isEmpty(product);

  return {
    valid_business,
    business_slug: business_details?.slug,
    business_details,
    categories,
    valid_category,
    category_slug: category_slug_redux,
    category,
    valid_product,
    product,
    product_id: product_id_redux,
  };
};
