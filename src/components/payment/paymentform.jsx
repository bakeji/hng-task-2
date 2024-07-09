import React from "react";
import { Link } from "react-router-dom";
import PaymentModal from "./payModal";
export default function PaymentForm(){
    return(
        <div className="paymnt-frm">
            <h1>Payment</h1>
            <p>Make your selection</p>

            <form onSubmit={(event)=>{event.preventDefault}}>
                <div className="radio">
                    <div className="debit">
                        <input type="radio" name="payment" id="debit" />
                        <label htmlFor="debit">Debit Card</label>
                    </div>
                    <div className="credit">
                        <input type="radio" name="payment" id="credit" />
                        <label htmlFor="credit">Credit Card</label>
                    </div>
                </div>


                <div className="crd-name">
                    <label htmlFor="name">Card Holder Name</label>
                    <input type="text" id="name" />
                </div>

                <div className="crd-info">
                    <div className="card-num">
                        <label htmlFor="card">Card Number</label>
                        <input type="text" id="card" placeholder="xxxx xxxx xxxx xxxx" />
                    </div>

                    <div className="exp">
                        <label htmlFor="exp">Expiry Date</label>
                        <input type="text" id="exp" placeholder="mm / yy" />
                    </div>

                    <div className="cvv">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" />
                    </div>
                </div>
            </form>

            <div className="mk-pmt">
                
                <PaymentModal/>

            </div>
        </div>
    )
}