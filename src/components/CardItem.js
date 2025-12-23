import React from "react";
import { moneyFormater } from "../helper";


const CardItem=({
    product, money,total,basket,setBasket
})=>{
    const addItem=()=>{
        const checkBasket=basket.find((item)=>item.id===product.id)
        if(checkBasket){
            checkBasket.amount=checkBasket.amount+1;
            setBasket(
                [...basket.filter((item)=>item.id!==product.id),checkBasket]
            )
        }else{
            setBasket([...basket,{
                id:product.id,
                amount:1,
                title:product.title,
                price:product.price
            }
            ])
        }
    }
    const removeItem=()=>{
        const currentBasket=basket.find((item)=>item.id===product.id);
        const basketWithoutCurrent= basket.filter((item)=>item.id!==product.id);
        currentBasket.amount=currentBasket.amount-1;
        if(currentBasket.amount===0){
            setBasket([...basketWithoutCurrent])
        }
        else{
            setBasket([...basketWithoutCurrent,currentBasket])
        }
    }
    return(
        <div className="cart_item">
            <img src={product.image} alt={product.title} />
            <div className="card_text">
                <h1>{product.title}</h1>
                <h5>{moneyFormater(product.price)}</h5>
            </div>
            <div className="actions">
                <span>0</span>
                <button className="btn btn_buy" onClick={addItem}>Add</button>
                <button className="btn btn_sell" onClick={removeItem}>Interest</button>
            </div>
        </div>
    )
}

export default CardItem;