import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = ({ id, gridItems }) => {

    return (
        <Carousel
            autoPlay
            selectedItem={id}
            infiniteLoop={true}
            transitionTime={400}
        >
            {gridItems.map((item) => <div key={item.id} >
                <img src={item.url}></img>
                <p className="legend">{item.title}</p></div>)}
        </Carousel>
    );

};

export default DemoCarousel;
