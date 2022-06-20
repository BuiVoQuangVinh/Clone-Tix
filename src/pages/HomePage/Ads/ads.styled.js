import Slider from "react-slick"
import styled from 'styled-components/macro'





export const SliderStyled = styled(Slider)`
    overflow:hidden ;
`



export const AdsStyled = styled.div`
    min-height:650px ;
    background-image:url(${props => props.backgroundImg}) ;
    background-size: contain;
    overflow: hidden;
    color:white ;
`

export const AdsContainer = styled.div`
    display:flex ;
    width:50% ;
    margin:0 auto ;
    padding-top:120px ;
    padding-bottom:80px ;
`

export const AdsText = styled.div`
    padding:0 15px ;
    flex: 0 0 50%;
    max-width: 50%;
`

export const AdsTextItem = styled.p`
    font-size:${props => props.fontSize} ;
    font-weight:${props => props.fontWeight} ;
    margin-bottom:${props=>props.marginBottom} ;

`

export const AdsTextButton = styled.button`
    cursor: pointer;
    background-color: #fb4226;
    border-radius: 4px;
    padding: 12px 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border: none;
    margin-bottom:10px ;
`
export const AdsTextLink = styled.a`
    text-decoration:none ;
    color:white ;
    border-bottom: 1px solid #fff;
    transition:all 0.3s ;
    &:hover{
        color: #fb4226; ;
        border-bottom: 1px solid #fb4226;
    }
`

export const AdsImg = styled.div`
    padding:0 15px ;
    flex: 0 0 50%;
    max-width: 50%;
    cursor: pointer;
    outline:none ;
    position:relative ;
`

export const AdsPhone = styled.div`
    height: 437.7px;
    width: 207px;
    border-radius: 20px;
    position: absolute;
    overflow:hidden ;
    top: 85%;
    transform: translateY(-50%);
`
export const AdsPhoneImg = styled.img`
    width:100%;
`

export const AdsScreen = styled.div`
    position: absolute;
    top: 85%;
    left: 21px;
    transform: translateY(-50%);
    height: 422.34px;
    width: 195px;
    border-radius: 20px;
    overflow:hidden ;
`

export const AdsScreenImg = styled.img`
    width:100%;
    outline:none ;
`
