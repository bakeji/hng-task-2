import React from "react";

export default function CartItems(){
    return(
        <div className="cart-items">
            <h1>Shopping Cart</h1>

            <div className="cart-products">

                <div className="cp1">
                    <p>Products</p>
                    <p>Color</p>
                    <p>Quantity</p>
                    <p>price</p>
                </div>

                <div className="item-info">
                    <div className="item">
                        <div className="item-img">
                            <img src="images/wm6.png" alt="bag" />
                        </div>

                        <div className="item-name">
                            <p>travel bag</p>
                            <p>#40598</p>
                        </div>
                    </div>

                    <div className="color">
                        <p>Black</p>
                    </div>
                    
                    <div className="quantity">
                        <div>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>

                    </div>

                    <div className="pr">
                        <p>n70,000</p>
                    </div>

                    <div className="cls-btn">
                        <button><img src="images/cls" alt="" /></button>
                    </div>
                </div>


                <div className="total">
                    <p>total amount</p>
                    <p>n70,00000</p>
                </div>

            </div>

            <div className="chck-out">
                <button>Check Out</button>
            </div>

        </div>
    )
}