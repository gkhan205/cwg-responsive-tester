import React, { useEffect } from "react";
import ReactGA from "react-ga";

import ResponsiveTest from "./modules/ResponsiveTest";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-164384148-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
