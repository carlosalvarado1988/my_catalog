import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { filter } from "lodash";

import { selectBusinessCategories } from "../../../redux/business/selectors";
import { Category } from "../../../common/types/api/types";

export const useProductsCategory = () => {
  const { categorySlug } = useParams();
  const businessCategories = useSelector(selectBusinessCategories);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const categoryArray = filter(
      businessCategories,
      (cat: Category) => cat.slug === categorySlug
    );
    setCategory(categoryArray[0] as Category);
  }, [businessCategories, categorySlug]);

  return { category };
};
