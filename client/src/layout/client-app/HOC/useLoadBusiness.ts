import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getBusinessAction } from "../../../redux/business/actions";
import { selectBusinessSlug } from "../../../redux/business/selectors";
import {
  selectIsLoadingBusiness,
  selectError,
} from "../../../redux/root/selectors";

export const useLoadBusiness = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const loadingBusiness = useSelector(selectIsLoadingBusiness);
  const error = useSelector(selectError, shallowEqual);
  const businessSlug = useSelector(selectBusinessSlug);

  const found = useMemo(() => businessSlug === slug, [businessSlug, slug]);

  useEffect(() => {
    if (!found) {
      console.log("### loading: to fetch");
      dispatch(
        getBusinessAction.started({
          slug: slug.toLowerCase(),
        })
      );
    }
  }, [dispatch, found]);

  return { found, loadingBusiness, error };
};
