import React, { useContext, useState } from "react";
import { BagContext } from "../context/bagContext";
import { Link } from "react-router-dom";
import ProductDet from "./prodctDetails";
export default function MenBags(){

    const {data, addToCart, isAddedToCart,currentPage, Category,removeFromCart} =useContext(BagContext)
    const [liked, setLiked] =useState({})
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
      };
      const typeOfBag = Category[currentPage-1]
      console.log(typeOfBag)


    function likeBtn(id) {
        setLiked(prevLikedItems => ({
            ...prevLikedItems,
            [id]: !prevLikedItems[id]
        }));
    }
    
  
    return(
        <div id="men" className="Mn-bags">
            <h2 className="bg-hd">{typeOfBag}</h2>

<div className="grid">

    {data?.map((bags)=>(

    <div key={bags.id} className="card">
        <div className="bg-lk">
            <div className="img">
                <img src={`https://api.timbu.cloud/images/${bags.photos[0]?.url}`} alt="bags" />
            </div>
            <button onClick={()=>likeBtn(bags?.id)}> <img src={liked[bags?.id]? 'images/heart1.png':"images/liked.png"} alt="like-btn" /></button>
        </div>
            <ProductDet selectedProduct={selectedProduct} name = {bags?.name} handleClick={()=>handleProductClick(bags)}/>
            {bags.star===5 &&
        <div className="star"> 
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
        </div>}

            {bags.star ===4 &&
            <div className="star">
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/str-n.png" alt="star" />
            
        </div>}

        <div className="prices">
            <p className="disc">₦{bags?.current_price[0]?.NGN[0]}.00</p>
            <p className="old">₦200,000.00</p>
        </div>
        <p className="rem">{`${bags?.available_quantity} pieces remaining`} </p>

        <div className="button">
        <Link to="/payment"><button className ="bn">Buy Now</button></Link>
            <button className = "adc" onClick={()=> isAddedToCart(bags.id)? removeFromCart(bags.id): addToCart(bags)}>
                {isAddedToCart(bags.id)? "Remove": " Add to Cart"}</button>
        </div>
    </div>

))}
</div>

        </div>
    )
}