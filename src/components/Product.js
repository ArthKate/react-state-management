import React, { useState } from "react";
import "./Product.css";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

export default function Product() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function getTotal() {
    return total.toLocaleString(undefined, currencyOptions);
  }

  const add = (product) => {
    setCart(current => [...current, product.name]);
    setTotal(current => current + product.price);
  };

  const remove = function () {
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {getTotal()}</div>
      <div>
        {products.map((product) => (
          <div key={product.name}>
            <div className="product">
              <span role="img" aria-label={product.name}>
                {product.emoji}
              </span>
            </div>
            <button onClick={() => add(product)}>Add</button>{" "}
          <button onClick={() => remove()}>Remove</button>
          </div>
        ))}
      </div>

    </div>
  );
}
