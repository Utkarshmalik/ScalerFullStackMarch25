
import { useEffect, useState } from "react";
import CarouselData from "./CarouselData.json";

function Carousel(){

    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const products = CarouselData.products;
    const currentProduct = products[currentItemIndex];

    useEffect(()=>{
       const timer=  setInterval(()=>{
            goToNext();
        },3000);

        return ()=>{
            clearInterval(timer);
        }
    },[currentItemIndex])

    const goToNext = ()=>{
        setCurrentItemIndex((currentItemIndex)=>(currentItemIndex+1)%products.length);
    }

     const goToPrev = ()=>{
        setCurrentItemIndex((currentItemIndex)=>
            (currentItemIndex-1+products.length)%products.length);
    }


    console.log(CarouselData);

    return <div style={{display:"flex",flexDirection:"column",

        justifyContent:"center",alignItems:"center"

    }}>

        <button onClick={goToPrev} > Prev </button>

        <img src={currentProduct.images[0]}
        height={500} width={500} />

        <h2> {currentProduct.title} </h2>

        <p> {currentProduct.description} </p>


        <button onClick={goToNext} > Next </button>


    </div>

}

export default Carousel;