import { useMemo } from "react";
import { useSelector } from "react-redux";
import { isEmpty, filter } from "lodash";

import { selectBusinessCategories } from "../../../redux/business/selectors";
import { Category } from "../../../common/types/api/types";
import { useCurrenNavigation } from "../../shared/hooks/useCurrentNavigation";

export const useProductsCategory = () => {
  const { category_slug } = useCurrenNavigation();
  const businessCategories = useSelector(selectBusinessCategories);
  const category: Category = useMemo(() => {
    return isEmpty(category_slug)
      ? ({} as Category)
      : (filter(
          businessCategories,
          (cat: Category) => cat.slug === category_slug
        )[0] as Category);
  }, [businessCategories, category_slug]);

  return { category };
};
