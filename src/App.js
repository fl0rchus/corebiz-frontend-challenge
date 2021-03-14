import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import Newsletter from "./components/Newsletter/Newsletter";

export const quantityContext = React.createContext();
const cantFromLocalStorage = JSON.parse(window.localStorage.getItem("cant"));

const App = () => {
  const [quantity, setQuantity] = useState(cantFromLocalStorage);

  useEffect(() => {
    window.localStorage.setItem("cant", quantity);
  }, [quantity]);

  return (
    <quantityContext.Provider value={{ quantity, setQuantity }}>
      <div className="grid-container">
        <Header />
        <MainContent />
        <Newsletter />
        <Footer />
      </div>
    </quantityContext.Provider>
  );
};

export default App;
