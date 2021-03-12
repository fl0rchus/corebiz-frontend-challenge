import React from "react";
import Star from "../../assets/star-icon.svg";
import Desc from "../../assets/desc.svg";

const ProductItem = ({ data }) => {
  let stars = [];
  for (let i = 0; i < data.stars; i++) stars.push(true);
  return (
    <div className="product-item-card">
      <div className="product-item-off">
        {data.listPrice != null ? (
          <img src={Desc} alt="Off" style={{ width: 50, float: "right" }} />
        ) : (
          ""
        )}
      </div>
      <div className="product-item-image">
        <img src={data.imageUrl} alt={data.productName} />
      </div>
      <p className="product-item-name">{data.productName}</p>
      <p className="product-item-listPrice">
        {data.listPrice != null
          ? "de R$" + Math.ceil(data.listPrice.toFixed(2))
          : ""}
      </p>
      <div className="product-item-stars">
        {stars.map((item, index) => {
          return <StarIcon key={index} />;
        })}
      </div>
      <p className="product-item-price">por R$ {data.price}</p>
      <p className="product-item-quantity">
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
      <button className="btn btn-comprar">COMPRAR</button>
    </div>
  );
};

const StarIcon = () => {
  return <img src={Star} />;
};

export default ProductItem;
