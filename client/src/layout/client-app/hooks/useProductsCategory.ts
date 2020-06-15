import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { filter } from "lodash";

import { selectBusinessCategories } from "../../../redux/business/selectors";
import { Category } from "../../../common/types/api/types";

export const useProductsCategory = () => {
  const { categorySlug } = useParams();
  const businessCategories: Category[] = useSelector(selectBusinessCategories);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    setCategory(
      filter(
        businessCategories,
        (cat: Category) => cat.slug === categorySlug
      )[0]
    );
  }, [businessCategories, categorySlug]);

  return { category };
};
