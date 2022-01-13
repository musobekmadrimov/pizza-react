import React from "react";
import shoppingCart from "./cart.svg";

export default function Card({ data, addToCart }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <img
          src={data.url}
          title={data.title}
          alt={data.title}
          className="card-image"
        />
      </div>
      <div className="cardBody">
          <h3 className="cardTitle">{data.title}</h3>
          <p className="cardDesc">{data.desc}</p>
          <p className="cardPrice"><span>{data.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} сум</span></p>
          <button className="add-to-cart" onClick={() => addToCart(data)}>
              <img src={shoppingCart} alt="Shopping Button" className="cartIcon"/>
              ЗАКАЗАТЬ
          </button>
      </div>
    </div>
  );
}
