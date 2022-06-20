import React from 'react'

import {
    CarouselStyled,
    SliderStyled,
    CarouselItem,
    CarouselImg,
    // PrevStyled,
    // NextStyled,
} from "./carousel.styled";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel() {



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };


    const listCarousel = [
        {   
            id:"hero1",
            img: "./img/carousel/hero1.jpg"
        },
        {
            id:"hero2",
            img: "./img/carousel/hero2.png"
        }, 
        {
            id:"hero3",
            img: "./img/carousel/hero3.png"
        }, 
        {
            id:"hero4",
            img: "./img/carousel/hero4.png"
        },

    ];
    return (
        <CarouselStyled>
            <SliderStyled {...settings}>
                {listCarousel.map((item) => {
                    return (
                        <CarouselItem key={item.id}>
                            <CarouselImg src={item.img} />
                        </CarouselItem>
                    )
                })}
            </SliderStyled>

        </CarouselStyled>
    );
}

