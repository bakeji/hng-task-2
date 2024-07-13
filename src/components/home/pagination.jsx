import React, { useContext } from "react";
import { BagContext } from "../context/bagContext";
import MenBags from "./bags";

export default function Pagination(){

const totalPages = 3
const pageNumbers = [1, 2, 3]

const{setCurrentPage, currentPage} = useContext(BagContext)

function handlePageNumber(number){
    setCurrentPage(number)
}

function handleNextPage(){
    if(currentPage<totalPages)
        {
        setCurrentPage(prev=>prev+1)
    }
}
function handlePrevPage(){
    if(currentPage>1)
        {
        setCurrentPage(prev => prev-1)
    }

}

    return(
        <div onClick={handlePrevPage} className="pag">
            <button className="pag-btn1">prev</button>
            <>
            {pageNumbers.map((number)=>(
            <button onClick={()=>handlePageNumber(number)} key={number} className={currentPage === number? "pag-btn1" :"pag-btn"}>
                {number}</button>
        ))}
            </>
           
            <button onClick={handleNextPage} className="pag-btn1">next</button>
        </div>
    )
}