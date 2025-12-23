import React from "react";
import { moneyFormater } from "../helper";
import "../App.css";



const Footer=({basket,total,setBasket})=>{
    const resetBasket=()=>{
        setBasket([])
    }
    return(
        <div className="footer">
            <div className="footer-header">
                your cart
            </div>
            <div className="footer-container" >
                {basket.map((item)=>
                <div className="footer-basket-item" key={item.id}>
                    <span>{item.title}</span>
                    <span>{item.amount}</span>
                </div>
                )}
            </div>
            <div className="button-container">
                <span>total:${moneyFormater(total)}</span>
                <button onChange={resetBasket}>Reset</button>
            </div>
        </div>
    )
}

export default Footer;