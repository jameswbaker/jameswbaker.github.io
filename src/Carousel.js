import React, { useState, useEffect } from 'react'

const Carousel = () => {
    const data = ["Merck QE Library", "FindMeFood", "ArXiv Dataset Analysis", "4"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
      if (currentIndex === data.length-1) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex(currentIndex + 1);
    }
  
    useEffect(() => {
      const interval = setInterval(() => {carouselInfiniteScroll()}, 3000);
      return () => clearInterval(interval);
    });

    return (
          <div style={{display: "flex", flexDirection: "row"}}>
            { data.map((item, index) => {
              return <h1 style={{transform: `translate(-${currentIndex * 100}%)`}} key={index}>{item}</h1>
            })}
          </div>
    );
  }

  export default Carousel;