import React from "react";
import DeliveryModal from "./delModal";

export default function DeliveryForm(){
    return(
        <div className="delivery-frm">
            <h1>Add Delivery Details</h1>
            <p>Input your delivery details</p>

            <form onSubmit={(event)=>{event.preventDefault}}>
                <div className="hm">
                    <div className="hn">
                        <label htmlFor="name">House Number</label>
                        <input type="text" id="name" />
                    </div>

                    <div className="str-nm">
                        <label htmlFor="street">Street Name</label>
                        <input type="text" id="street" />
                    </div>

                    <div className="area-nm">
                        <label htmlFor="area">Area Name</label>
                        <input type="text" id="area" />
                    </div>
                </div>

                <div className="hm2">
                    <div className="city">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" />
                    </div>

                    <div className="state">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" />
                    </div>

                    <div className="country">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" />
                    </div>
                </div>
            </form>

            <div className="mk-pmt">
               <DeliveryModal />
            </div>
        </div>

    )
}