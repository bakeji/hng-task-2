import React from "react";

export default function Footer(){
    return(
        <footer>
            <div className="ft-flx">
                <div className="ft-flx1">
                    <p>Choose Stardrip and choose easy for yourself</p>

                        <div className="ft-flx4">
                            <h1>Follow us</h1>
                            <div className="img1">
                                <button><img src="images/fb.png" alt="facebook" /></button>
                                <button><img src="images/twi.png" alt="twitter" /></button>
                                <button><img src="images/ig.png" alt="" /></button>
                            </div>
                        </div>
                </div>

                    <div className="ft-flx2">
                        <h1>Contact us</h1>
                        <span><img src="images/pln.png" alt="plane" /> <p>Plot 2, Old Ife road. Idumota, Lagos State.</p></span>
                        <span><img src="images/mail.png" alt="plane" /> <p> stardrip@gmail.com</p></span>
                        <span><img src="images/phone.png" alt="plane" /> <p>+2348100000000</p></span>
                    </div>


                    <div className="ft-flx3">
                        <h1>Follow us</h1>
                        <div className="img1">
                            <button><img src="images/fb.png" alt="facebook" /></button>
                            <button><img src="images/twi.png" alt="twitter" /></button>
                            <button><img src="images/ig.png" alt="" /></button>
                        </div>
                    </div>
            </div>

          <hr />
           <span className="spn">
            <img src="images/cp.png" alt="copywright" />
           <p>Stardrip. All Rights Reserved</p>
           </span>
        </footer>
    )
}