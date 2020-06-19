import { useMemo } from "react";
import { useSelector } from "react-redux";
import { isEmpty, filter } from "lodash";

import { selectBusiness } from "../../../redux/business/selectors";
import { Business, Category, Product } from "../../../common/types/api/types";
import { useCurrenNavigation } from "../../shared/hooks/useCurrentNavigation";

export const useBusinessInventory = () => {
  const { category_slug, product_id } = useCurrenNavigation();
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
    return isEmpty(category_slug)
      ? ({} as Category)
      : (filter(
          categories,
          (cat: Category) => cat.slug === category_slug
        )[0] as Category) || ({} as Category);
  }, [categories, category_slug]);

  const product: Product = useMemo(() => {
    return isEmpty(product_id)
      ? ({} as Product)
      : filter(
          category.products,
          (prod: Product) =>
            prod.product_id.toString() === product_id.toString()
        )[0] || ({} as Product);
  }, [category, product_id]);

  const valid_business: boolean = !isEmpty(categories);
  const valid_category: boolean = !isEmpty(category);
  const valid_product: boolean = !isEmpty(product);

  return {
    valid_business,
    business_details,
    categories,
    valid_category,
    category,
    valid_product,
    product,
  };
};
