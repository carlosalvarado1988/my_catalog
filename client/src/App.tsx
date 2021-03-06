import React from "react";
import { BrowserRouter } from "react-router-dom";

import { useNotification } from "./layout/shared/hooks/useNotification";
import { NavBarContainer } from "./layout/shared/NavBarContainer";
import { PageContainer } from "./layout/shared/PageContainer";
import { FooterContainer } from "./layout/shared/FooterContainer";
import { LoadingSpinning } from "./layout/shared/LoadingSpinning";
import { ShoppingCartDetails } from "./layout/shared/ShoppingCartDetails";

import "./config/axios.config";

function App() {
  useNotification();
  return (
    <BrowserRouter>
      <main>
        <NavBarContainer />
        <ShoppingCartDetails />
        <PageContainer />
        <FooterContainer />
        <LoadingSpinning />
      </main>
    </BrowserRouter>
  );
}

export default App;
