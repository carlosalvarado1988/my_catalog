import { useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  setNavigationTrackCategorySlugAction,
  setNavigationTrackProductIdAction,
} from "../../../redux/navigation/actions";

export const useCurrenNavigation = () => {
  const dispatch = useDispatch();
  const { categorySlug, productId } = useParams();
  const current_category_slug = useMemo(() => categorySlug, [categorySlug]);
  const current_product_id = useMemo(() => productId, [productId]);

  useEffect(() => {
    dispatch(setNavigationTrackCategorySlugAction(current_category_slug));
  }, [dispatch, current_category_slug]);
  useEffect(() => {
    dispatch(setNavigationTrackProductIdAction(current_product_id?.toString()));
  }, [dispatch, current_product_id]);
};
