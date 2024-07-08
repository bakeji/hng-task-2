import React from "react";
import Header from "../components/home/header";
import HeroSection from "../components/home/heroSection";
import TrendingBags from "../components/home/trending";
import MenBags from "../components/home/Men";
import WomenBags from "../components/home/women";
import KidsBags from "../components/home/kids";
import Footer from "../components/home/footer";
export default function Homepage(){

  

    return(
        
        <div className="homePage">
            <Header />
            <hr />
            <HeroSection />
            <hr />
            <TrendingBags  />
            <MenBags />
            <KidsBags />
            <WomenBags />
            <Footer />

        </div>
    )
}