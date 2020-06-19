import { useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getBusinessAction } from "../../../redux/business/actions";
import { selectBusinessSlugRedux } from "../../../redux/business/selectors";
import { selectIsLoadingBusiness } from "../../../redux/root/selectors";

export const useLoadBusiness = () => {
  const dispatch = useDispatch();
  const { businessSlug } = useParams();
  const loadingBusiness = useSelector(selectIsLoadingBusiness);
  const businessSlugRedux = useSelector(selectBusinessSlugRedux);

  const loading_business = useMemo(() => loadingBusiness, [loadingBusiness]);
  const business_found = useMemo(() => businessSlug === businessSlugRedux, [
    businessSlug,
    businessSlugRedux,
  ]);
  useEffect(() => {
    if (!business_found) {
      dispatch(
        getBusinessAction.started({
          slug: businessSlug.toLowerCase(),
        })
      );
    }
  }, [dispatch, business_found, businessSlug]);
  return { business_found, loading_business };
};
