import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(3000);
  const [total, setTotal] = useState(0);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount *
            products.find((p) => p.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div className="App">
      <Header total={total} money={money} />
      <div className="container">
        <Card
          product={products}
          money={money}
          total={total}
          basket={basket}
          setBasket={setBasket}
        />
      </div>
      {basket.length > 0 && (
        <Footer total={total} basket={basket} setBasket={setBasket} />
      )}
    </div>
  );
}

export default App;
