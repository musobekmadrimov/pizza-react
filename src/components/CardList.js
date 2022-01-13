import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function CardList({ products, addToCart }) {
  const [delay, setDelay] = useState(true);
  useEffect(() => {
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 3000);
  }, [products]);
  return (
    <>
      {delay ? (
        <div className="loader">
          <img
            src="https://pandagif.com/gifs/ysjA8HY1lA.gif"
            alt="loader"
            className="loader"
          />
        </div>
      ) : (
        <>
          <div className="card-list">
            {products.length === 0 ? (
              <p>Нет продуктов!</p>
            ) : (
              products.map((item) => {
                return(
                    <Card key={item.id} data={item} addToCart={addToCart} />
                )
              })
            )}
          </div>
        </>
      )}
    </>
  );
}
