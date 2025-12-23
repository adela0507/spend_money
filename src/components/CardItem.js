import React from "react";
import { moneyFormater } from "../helper";
import "../App.css";


const CardItem = ({ product, money, total, basket, setBasket }) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addItem = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
          title: product.title,
          price: product.price,
        },
      ]);
    }
  };

  const removeItem = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    if (!currentBasket) return;

    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );

    currentBasket.amount -= 1;

    if (currentBasket.amount === 0) {
      setBasket(basketWithoutCurrent);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <div className="cart_item">
      <img src={product.image} alt={product.title} />
      <div className="card_text">
        <h1>{product.title}</h1>
        <h5>{moneyFormater(product.price)} $</h5>
      </div>
      <div className="actions">
        <span>{basketItem ? basketItem.amount : 0}</span>
        <button
          className="btn btn_buy"
          onClick={addItem}
          disabled={total + product.price > money}
        >
          Add
        </button>
        <button
          className="btn btn_sell"
          onClick={removeItem}
          disabled={!basketItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CardItem;
