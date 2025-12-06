import React from "react";


const CardItem=({
    product, money,total,basket,setBasket
})=>{
    const addItem=()=>{}
    const removeItem=()=>{}
    return(
        <div className="cart_item">
            <img src={product.image} alt={product.title} />
            <div className="card_text">
                <h1>{product.title}</h1>
                <h5>{product.price}</h5>
            </div>
        </div>
    )
}

export default CardItem;