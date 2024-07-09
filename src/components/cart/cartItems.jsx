import React, { useContext, useEffect, useState } from "react";
import { BagContext } from "../context/bagContext";
import { Link } from "react-router-dom";

export default function CartItems(){
   

    const [total, setTotal]= useState(0)
    const {cart, removeFromCart} =useContext(BagContext)
    const [quantity, setQuantity] = useState({})

    useEffect(() => {
        const initialQuantities = cart.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {});
        setQuantity(initialQuantities);
    }, [cart]);

    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => {
            return acc + (item.discPrice * (quantity[item.id] || 1));
        }, 0);
        setTotal(newTotal);
    }, [cart, quantity]);
   

    const increase = (itemId) => {
        setQuantity((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
    };

    const decrease = (itemId) => {
        setQuantity((prev) => ({
            ...prev,
            [itemId]: Math.max(1, prev[itemId] - 1)
        }));
    };
   
   
    

    return(

    
        <div className="cart-items">

            {cart.length===0 ?

            <div className="empty-cart">
                <h1>Your cart is empty</h1>
                <div className="mk-pmt">
                    <Link to="/"><button>Continue Shopping</button></Link>
                </div>
            </div>

                :

                <>
            <h1>Shopping Cart</h1>

            <div className="cart-products">

                <div className="cp1">
                    <p>Products</p>
                    <p className="col">Color</p>
                    <p className ='qty'>Quantity</p>
                    <p className="cost">price</p>
                </div>

                {cart?.map((cartItem)=>(
                    
                    <div>
                <div key={cartItem.id} className="item-info">
                    <div className="item">
                        <div className="item-img">
                            <img src={cartItem.pic} alt="bag" />
                        </div>

                        <div className="item-name">
                            <p>{cartItem.name}</p>
                            <p>{cartItem.code}</p>
                        </div>
                    </div>

                    <div className="color">
                        <p>Black</p>
                    </div>
                    
                    <div className="quantity">
                        <div>
                            <button onClick={()=>decrease(cartItem.id)}>-</button>
                            <p>{quantity[cartItem.id]||1}</p>
                            <button onClick={()=>increase(cartItem.id)}> +</button>
                        </div>

                    </div>

                    <div className="pr">
                        <p>₦{cartItem.discPrice * quantity[cartItem.id ||1]}.00</p>

                        <div className="cls-btn">
                            <button onClick={()=>removeFromCart(cartItem.id)}><img src="images/cls.png" alt="" /></button>
                        </div>
                    </div>
                    
                </div>

                <hr />
                </div>
                
               
))}

                        
                <div className="total">
                    <p>Total Amount</p>
                    <p>₦{total}.00</p>
                </div>

            </div>

            <div className="check-out">
                <Link to="/payment"><button>Check Out</button></Link>
            </div>
            </>
            }

        </div>
    )
}