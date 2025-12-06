import React from "react";
import { moneyFormater } from "../helper";

const Header=({money,total})=>{
    return(
        <div className="header">
            {total>0 && money-total!==0 &&
            <span>
                Spend money <span className="money"> {moneyFormater(money-total)} you have a lot of money</span>
            </span>
            }
            {total===0 &&
            <span>
                to spend <span className="money">{moneyFormater(money)} you have money</span>
            </span>
            }
            {money-total===0 &&
            <span>
                <span className="money">{moneyFormater(total)}</span>
            </span>
            }


             </div>
    )
}

export default Header;