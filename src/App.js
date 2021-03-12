import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import Newsletter from "./components/Newsletter/Newsletter";

const App = () => {
  return (
    <div className="grid-container">
      <Header />
      <MainContent />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
