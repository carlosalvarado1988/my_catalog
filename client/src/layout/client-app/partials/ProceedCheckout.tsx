import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useBusinessInventory } from "../hooks/useBusinessInventory";
import { selectAmountShoppingCart } from "../../../redux/shopping-cart/selectors";
import { convertNumberToCurrency } from "../../../common/utils";
import { CurrenciesEnum } from "../../../common/types/api/enums.d";
import { toogleShowShoopingCartAction } from "../../../redux/shopping-cart/actions";

export const ProceedCheckout = React.memo(function Component() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { business_slug } = useBusinessInventory();
  console.log("business_slug: ", business_slug);
  const amount = useSelector(selectAmountShoppingCart);

  return (
    <Wrapper>
      <Button
        className="button"
        type="primary"
        onClick={(e) => {
          history.push(`/${business_slug}/delivery`);
          dispatch(toogleShowShoopingCartAction());
          e.preventDefault();
        }}
        disabled={amount === 0}
      >
        Solicitar Entrega
        {` / ${convertNumberToCurrency(amount, CurrenciesEnum.USD)}`}
      </Button>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  .button {
    border-radius: 20px;
  }
`;
