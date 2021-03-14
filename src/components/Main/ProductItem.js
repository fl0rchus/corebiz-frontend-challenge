import React, { useContext, useEffect, useState } from "react";
import Star from "../../assets/star-icon.svg";
import Desc from "../../assets/desc.svg";
import { quantityContext } from "../../App";

const ProductItem = ({ data }) => {
  const { quantity, setQuantity } = useContext(quantityContext);

  let stars = [];
  for (let i = 0; i < data.stars; i++) stars.push(true);

  return (
    <div className="product">
      <div className="product__off">
        {data.listPrice != null ? (
          <img src={Desc} alt="Off" className="product__off-icon" />
        ) : (
          ""
        )}
      </div>
      <div className="product__image">
        <img
          src={data.imageUrl}
          alt={data.productName}
          className="product__image--img"
        />
      </div>
      <div className="product__info">
        <p className="product__name">{data.productName}</p>
        <p className="product__listPrice">
          {data.listPrice != null
            ? "de R$" + Math.ceil(data.listPrice.toFixed(2))
            : ""}
        </p>
        <div className="product__stars">
          {stars.map((item, index) => {
            return <StarIcon key={index} />;
          })}
        </div>
        <p className="product__price">por R$ {data.price}</p>
        <p className="product__quantity">
          {data.installments.map((item) => {
            {
              return (
                "ou dem x" +
                item.quantity +
                " de R$" +
                Math.ceil(item.value.toPrecision(2))
              );
            }
          })}
        </p>
      </div>
      <button
        className="btn btn__comprar"
        onClick={() => setQuantity(quantity + 1)}
      >
        COMPRAR
      </button>
    </div>
  );
};

const StarIcon = () => {
  return <img src={Star} alt="Star" />;
};

export default ProductItem;
