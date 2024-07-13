import React, { useContext } from "react";
import Header from "../components/home/header";
import HeroSection from "../components/home/heroSection";
import MenBags from "../components/home/bags";
import Footer from "../components/home/footer";
import Pagination from "../components/home/pagination";
import { BagContext } from "../components/context/bagContext";
import Loading from "../components/home/loading";
export default function Homepage(){
    const{loading}= useContext(BagContext)

  

    return(
        
        
        <div className="homePage">
            <Header />
            <hr />
            <HeroSection />
            <hr />
            <>
{loading?
            <Loading/> 
            :
            <MenBags />
}</>
            
           <div className="pagn">
                <Pagination />
           </div>
            <Footer />

        </div>
    )
}