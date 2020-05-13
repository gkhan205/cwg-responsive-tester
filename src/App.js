import React from "react";

import ResponsiveTest from "./modules/ResponsiveTest";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <ResponsiveTest />
      </div>
      <Footer />
    </div>
  );
}

export default App;
