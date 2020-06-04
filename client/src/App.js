import React from "react";

import { HeaderContainer } from "./components/HeaderContainer";
import { PageContainer } from "./components/PageContainer";
import { FooterContainer } from "./components/FooterContainer";

function App() {
  return (
    <main>
      <HeaderContainer />
      <PageContainer />
      <FooterContainer />
    </main>
  );
}

export default App;
