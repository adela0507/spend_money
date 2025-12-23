import React from "react";
import CardItem from "./CardItem";
import "../App.css";


const Card = ({ product, money, total, basket, setBasket }) => {
  return (
    <div className="cards">
      {product.map((item) => (
        <CardItem
          key={item.id}
          product={item}
          money={money}
          total={total}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
    </div>
  );
};

export default Card;
