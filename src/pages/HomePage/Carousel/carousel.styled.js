import Slider from "react-slick"
import { FcPrevious, FcNext } from "react-icons/fc"



import styled from 'styled-components/macro'



export const CarouselStyled = styled.div`
    padding-top:60px;
    overflow:hidden ;
`
export const PrevStyled = styled(FcPrevious)`
 
`

export const NextStyled = styled(FcNext)`

`
export const SliderStyled = styled(Slider)`
    & .slick-slide {
        outline: none
    }

    & .slick-dots li{
        width:20px ;
    }
    
    & .slick-dots{
        bottom: 100px;
    };
    & .slick-dots li button:before{
        font-size: 16px;
        color:#D8D8D8 ;
        opacity:1 ;
    };
    & .slick-dots li.slick-active button:before{
        color:#FB4226 ;
  
    };


    & .slick-prev {
        left: 80px;
        z-index: 9;

        width:16px ;
        height:16px ;
        transform:scale(3) ;
        &:hover{
            transition:0.3s ;
            
        }

    };

    & .slick-next {
        right: 75px;
        z-index:9 ;
        width:16px ;
        height:16px ;
        transform:scale(3) ;
        &:hover{
            transition:0.3s ;
        }
   
    }
`

export const CarouselItem = styled.div`

`

export const CarouselImg = styled.img`
    width:100% ;
    height:100% ;
    outline:none ;
`