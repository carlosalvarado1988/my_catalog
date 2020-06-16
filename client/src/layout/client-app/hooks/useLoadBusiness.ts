import { useState, useEffect } from "react";
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
  const [businessFound, setBusinessFound] = useState(false);

  useEffect(() => {
    setBusinessFound(businessSlug === businessSlugRedux);
  }, [businessSlug, businessSlugRedux]);

  useEffect(() => {
    if (!businessFound) {
      dispatch(
        getBusinessAction.started({
          slug: businessSlug.toLowerCase(),
        })
      );
    }
  }, [dispatch, businessFound, businessSlug]);

  return { businessFound, loadingBusiness };
};
