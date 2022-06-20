import React from 'react'
import {
  AdsStyled,
  AdsContainer,
  AdsText,
  AdsTextItem,
  AdsTextButton,
  AdsTextLink,
  AdsImg,
  AdsPhone,
  AdsPhoneImg,
  AdsScreen,
  AdsScreenImg,
  SliderStyled,
} from './ads.styled'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Ads() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  const adsImg = [
    {
      img: "./img/ads/1.jpg",
      id: "img1"
    },
    {
      img: "./img/ads/2.jpg",
      id: "img2"
    },
    {
      img: "./img/ads/3.jpg",
      id: "img3"
    },
    {
      img: "./img/ads/4.jpg",
      id: "img4"
    },
    {
      img: "./img/ads/5.jpg",
      id: "img5"
    },
    {
      img: "./img/ads/6.jpg",
      id: "img6"
    },
    {
      img: "./img/ads/7.jpg",
      id: "img7"
    },
    {
      img: "./img/ads/8.jpg",
      id: "img8"
    },
    {
      img: "./img/ads/9.jpg",
      id: "img9"
    },
    {
      img: "./img/ads/10.jpg",
      id: "img10"
    },
    {
      img: "./img/ads/11.jpg",
      id: "img11"
    },
    {
      img: "./img/ads/12.jpg",
      id: "img12"
    },
    {
      img: "./img/ads/13.jpg",
      id: "img13"
    },
    {
      img: "./img/ads/14.jpg",
      id: "img14"
    },
    {
      img: "./img/ads/15.jpg",
      id: "img15"
    },
    {
      img: "./img/ads/16.jpg",
      id: "img16"
    },
    {
      img: "./img/ads/17.jpg",
      id: "img17"
    },
    {
      img: "./img/ads/18.jpg",
      id: "img18"
    },

  ]

  return (
    <AdsStyled backgroundImg="./img/ads/bg1.jpg">
        <AdsContainer>
          <AdsText>
            <AdsTextItem
              fontSize="32px"
              fontWeight="700"
              marginBottom="10px"
            >Ứng dụng tiện lợi dành cho</AdsTextItem>
            <AdsTextItem
              fontSize="32px"
              fontWeight="700"
              marginBottom="10px"
            >người yêu điện ảnh</AdsTextItem>

            <AdsTextItem
              fontSize="16px"
              fontWeight="normal"
              marginBottom="10px"
            >Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</AdsTextItem>
            <AdsTextButton>App miễn phí - Tải về ngay!</AdsTextButton>
            <AdsTextItem
              fontSize="14px"
              fontWeight="normal"
              marginBottom="10px"
            >
              TIX có hai phiên bản
              <AdsTextLink href='#'> IOS </AdsTextLink>
              &
              <AdsTextLink href='#'> Android </AdsTextLink>
            </AdsTextItem>

          </AdsText>

          <AdsImg>
            <AdsPhone>
              <AdsPhoneImg src="./img/ads/phone.png" alt='phone-img' />
            </AdsPhone>
            <AdsScreen>
              <SliderStyled {...settings}>

                {adsImg.map((item) => {
                  return (
                    <AdsScreenImg src={item.img} alt="screen-img" key={item.id} />
                  )
                })}

              </SliderStyled>
            </AdsScreen>
          </AdsImg>
        </AdsContainer>
    
    </AdsStyled>
  )
}

