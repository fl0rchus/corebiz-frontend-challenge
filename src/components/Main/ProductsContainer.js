import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductsContainer = () => {
  let url = "https://corebiz-test.herokuapp.com/api/v1/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="products-container">
      {products.map((item, index) => {
        return <ProductItem data={item} key={index} />;
      })}
    </div>
  );
};

export default ProductsContainer;
