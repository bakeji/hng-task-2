import React from "react";
import Header from "../components/home/header";
import PaymentForm from "../components/payment/paymentform";
import Footer from "../components/home/footer";

export default function Payment(){
    return(
        <div className="payment">
            <Header />
            <hr />
            <PaymentForm />
            <Footer />
        </div>
    )
}