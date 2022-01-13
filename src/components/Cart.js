import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import swal from '@sweetalert/with-react/';


export default function Cart({ products, changeQuantity }) {
  const [classActive, setClassActive] = useState(false);
  const [sum, setSum] = useState(0);

  const toggleButton = () => {
    setClassActive(!classActive);
  };

  useEffect(() => {
    const total = products.reduce((sum = 0, product) => {
      return (sum += product.price * product.quantity);
    }, 0);

    setSum(total);
  }, [products]);

  const checkout = () => {
    swal({
      title: `Общая сумма: ${sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")} сум`,
      icon: "info",
    });
    // alert();
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleButton}>
        Корзинка
      </button>
      <div id="shoppingCart" className={classActive ? "active" : ""}>
        <div className="shopping-cart">
          <div className="cartContent">
            <div className="cartList">
              {products.length === 0 ? (
                <div className="emptyCart">
                  <img
                    src="https://collabkart.com/img/empty-cart.gif"
                    alt="Empty Cart"
                    className="emptyGIF"
                  />
                </div>
              ) : (
                products.map((product) => {
                  return (
                    <>
                      <CardItem
                        key={product.id}
                        product={product}
                        changeQuantity={changeQuantity}
                      />
                    </>
                  );
                })
              )}
            </div>
            <div className="total">
              <div className="info">
                <p className="totalText">Total: &nbsp;</p>
                <p className="totalPrice">
                  {" "}
                  {sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")} UZS
                </p>
              </div>
              <button onClick={checkout} className="purchaseBtn">
                КУПИТЬ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
