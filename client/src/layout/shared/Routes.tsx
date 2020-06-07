import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { CategoryList } from "../client-app/pages/CategoryList";
import { ProductsCategoryList } from "../client-app/pages/ProductsCategoryList";
import { OrderDetails } from "../client-app/pages/OrderDetails";
import { DeliveryOrder } from "../client-app/pages/DeliveryOrder";
import { SignIn } from "../dashboard-app/pages/SignIn";
import { NotFound } from "./NotFound";

export const Routes = () => (
  <Switch>
    <Route exact path={`/categories`}>
      <CategoryList />
    </Route>
    <Route exact path={"/product-list"}>
      <ProductsCategoryList />
    </Route>
    <Route exact path={"order-details"}>
      <OrderDetails />
    </Route>
    <Route exact path={"/delivery-order"}>
      <DeliveryOrder />
    </Route>
    <Route
      path="/admin"
      render={({ match: { url } }) => (
        <>
          <Route path={`${url}/signin`} exact>
            <SignIn />
          </Route>
          <Route path="*">
            <Redirect to={`${url}/signin`} />
          </Route>
        </>
      )}
    />
    <Route exact path="/404">
      <NotFound />
    </Route>
    <Redirect to="/404" />)
  </Switch>
);
