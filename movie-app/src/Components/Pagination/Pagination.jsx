import { useState } from "react";

function Pagination({pageNumber,onNext,onPrev}){


    return <div className="flex border h-[50px] items-center justify-center gap-8 font-xl bg-gray-400 text-white">  

        <div onClick={onPrev} className="cursor-pointer"> Prev </div>

        <div>  {pageNumber} </div>

        <div onClick={onNext} className="cursor-pointer"> Next </div>

    </div>

}

export default Pagination;