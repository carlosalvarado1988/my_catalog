import React from "react";

import { HeaderContainer } from "./layout/shared/HeaderContainer";
import { PageContainer } from "./layout/shared/PageContainer";
import { FooterContainer } from "./layout/shared/FooterContainer";

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
