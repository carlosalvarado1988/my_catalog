import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { CategoryList } from "../client-app/pages/CategoryList";
import { ProductsCategoryList } from "../client-app/pages/ProductsCategoryList";
import { OrderDetails } from "../client-app/pages/OrderDetails";
import { DeliveryOrder } from "../client-app/pages/DeliveryOrder";
import { SignIn } from "../dashboard-app/pages/SignIn";
import { NotFound } from "./NotFound";
import { CheckSlug } from "../client-app/HOC/CheckSlug";

export const Routes = () => {
  return (
    <Switch>
      {/* GENERAL ROUTES */}
      <Route exact path={`/`}>
        <Redirect to="/find" />
      </Route>
      <Route exact path={`/find`}>
        <h1>Find a business</h1>
      </Route>
      <Route exact path={`/signin`}>
        <SignIn />
      </Route>
      <Route exact path="/404">
        <NotFound />
      </Route>

      {/* ADMIN ROUTES */}
      <Route
        path="/admin"
        render={({ match: { url } }) => (
          <>
            <Route exact path={`${url}/dashboard`}>
              <h1>Dashboard</h1>
            </Route>
            <Route exact path={`${url}/setup`}>
              <h1>Setup</h1>
            </Route>
          </>
        )}
      />

      {/* CLIENT APP ROUTES */}
      <Route exact path={`/:businessSlug`}>
        <CheckSlug>
          <CategoryList />
        </CheckSlug>
      </Route>
      <Route exact path={"/:businessSlug/:categorySlug"}>
        <CheckSlug>
          <ProductsCategoryList />
        </CheckSlug>
      </Route>
      {/* <Route exact path={"/:businessSlug/order"}>
        <CheckSlug>
          <OrderDetails />
        </CheckSlug>
      </Route> */}
      <Route exact path={"/:businessSlug/delivery"}>
        <CheckSlug>
          <DeliveryOrder />
        </CheckSlug>
      </Route>

      <Redirect to="/404" />
    </Switch>
  );
};
