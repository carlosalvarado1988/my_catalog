import { useMemo } from "react";
import { useParams } from "react-router-dom";

export const useCurrenNavigation = () => {
  const { businessSlug, categorySlug, productId } = useParams();
  const business_slug = useMemo(() => businessSlug, [businessSlug]);
  const category_slug = useMemo(() => categorySlug, [categorySlug]);
  const product_id = useMemo(() => productId, [productId]);
  return { business_slug, category_slug, product_id };
};
