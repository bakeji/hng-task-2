import React, { useContext } from "react";
import { BagContext } from "../context/bagContext";
export default function WomenBags(){

    const {allBags} =useContext(BagContext)
    


    return(
        <div className="Mn-bags">
            <h2 className="bg-hd">Women bags</h2>

<div className="grid">

    {allBags?.WomenBags?.map((womenBags)=>(

    <div className="card">
        <div className="bg-lk">
            <div className="img">
                <img src={womenBags.pic} alt="bags" />
            </div>
            <button> <img src="images/liked.png" alt="like-btn" /></button>
        </div>

        <p className="name">{womenBags.name}</p>

            {womenBags.star ===5 &&
        <div className="star"> 
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
        </div>}

                {womenBags.star === 4 &&
        <div className="star">
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/str-n.png" alt="star" />
            
        </div>}

        <div className="prices">
            <p className="disc">{womenBags.discPrice}</p>
            <p className="old">{womenBags.price}</p>
        </div>
        <p className="rem">{`${womenBags.remaining} pieces remaining`}</p>

        <div className="button">
            <button>Buy Now</button>
            <button> Add to Cart</button>
        </div>
    </div>

))}
</div>

        </div>
    )
}