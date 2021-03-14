import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import { urlProducts } from "../../helpers/urls";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(urlProducts);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const myRef = React.createRef();

  const left = () => {
    const slide = myRef.current;
    slide.scrollBy(-300, 0);
  };

  const right = () => {
    const slide = myRef.current;
    slide.scrollBy(300, 0);
  };

  return (
    <div className="products-container">
      <div className="products-slider" ref={myRef}>
        {products.map((item, index) => {
          return <ProductItem data={item} key={index} />;
        })}
      </div>
      <button id="left" onClick={left}>
        <img src={LeftArrow} alt="Left" />
      </button>
      <button id="right" onClick={right}>
        <img src={RightArrow} alt="Right" />
      </button>
    </div>
  );
};

export default ProductsContainer;
