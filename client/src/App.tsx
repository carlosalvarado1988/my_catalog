import React from "react";
import { BrowserRouter } from "react-router-dom";

import { HeaderContainer } from "./layout/shared/HeaderContainer";
import { PageContainer } from "./layout/shared/PageContainer";
import { FooterContainer } from "./layout/shared/FooterContainer";
import { LoadingSpinning } from "./layout/shared/LoadingSpinning";
import "./config/axios.config";

function App() {
  return (
    <BrowserRouter>
      <main>
        <HeaderContainer />
        <PageContainer />
        <FooterContainer />
        <LoadingSpinning />
      </main>
    </BrowserRouter>
  );
}

export default App;
