import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function HeroSection(){
    return(
        <div  className="hero-sect">
            <div className="flx1">
                <h1>Order the best collection!</h1>
                <p className="flx1-p">Discover your style with us. We have super comfortable, top-notch and affordable bags just for you.</p>
                
                <div className="flx-2a">
                <img src="images/hero-bg.png" alt="" />

            </div>
                <div className="brnd-sh">
                <div className="brnds">
                    <img className="bds-img" src="images/Frame 31.png" alt="brands" />
                    <p>+ 100 brands</p>
                </div>

                <AnchorLink href="#sales"><button>Shop Now</button></AnchorLink>
                </div>
                
            </div>

            <div className="flx2">
                <img src="images/hero-bg.png" alt="" />

            </div>

           
        </div>
    )
}