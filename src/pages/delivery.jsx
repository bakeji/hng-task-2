import React from "react";
import Header from "../components/home/header";
import DeliveryForm from "../components/Delivery/deliveryform";
import Footer from "../components/home/footer";

export default function Delivery(){
    return(
        <div className="delivery">
            <Header />
            <hr />
            <DeliveryForm />
            <Footer />
        </div>
    )
}