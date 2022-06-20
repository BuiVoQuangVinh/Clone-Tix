import styled from 'styled-components/macro'
import Slider from "react-slick"

import {GrPrevious,GrNext} from "react-icons/gr"




export const ShowTimesStyled = styled.div`
    margin-top: 32px;
`
// =======================================================


export const Prev = styled(GrPrevious)`
    color:red ;
`
export const Next = styled(GrNext)`

`

export const SliderStyled = styled(Slider)`
        & .slick-slide {
            outline: none
        }

   


        & .slick-prev {
            z-index: 9;
     
            transform:scale(2) ;
            &:hover{
                transition:0.3s ;
                
            }

        };

        & .slick-next {        
            z-index:9 ;         
            transform:scale(2) ;
            &:hover{
                transition:0.3s ;
            }
    
        }
`
// =======================================================








export const ShowTimesContainer = styled.div`
    width:50% ;
    margin:0 auto;

`

export const ShowTimesNav = styled.ul`
    display:flex ;
    list-style:none ;
    justify-content:center ;
`

export const ShowTimesLi = styled.li`
    padding:8px 16px ;
    font-size: 24px;
    font-weight: 500;
    transform:scale(${(props) => props.active === 'active'?'1':'0.83333'}) ;
    color:${(props) => props.active === 'active'?'red':'#000'} ;
    cursor: pointer;

    transition:all 0.3s ;
    &:hover{
        transform:scale(1) ;
    }

`

export const ShowTimesContent = styled.div`
    display: ${props=>props.active === 'active'?'block':'none'} ;
   
    
`