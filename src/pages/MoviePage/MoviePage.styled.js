import styled from "styled-components/macro";

import { Link } from "react-router-dom";

export const MoviePageStyled = styled.div`
    color:white ;

`

export const MovieCarousel = styled.div`
    height:90vh ;
    background-image:url(${props => props.backGround}) ;
    background-repeat: no-repeat ;
    background-size:cover ;
    /* position:relative ; */
`
export const Blur = styled.div`
    width:100% ;
    height:100% ;
    top: 0;
    left: 0;
    background: linear-gradient(0deg,#0a2029,transparent);
`

export const MovieCarouselContainer = styled.div`
    position: absolute;
    width:49% ;
    top:50% ;
    left:50% ;
    transform:translate(-50%,-50%) ;

    display:flex ;
    flex-wrap: wrap;
`

export const MovieImg = styled.div`
    padding:0 15px ;
    width:25% ;


`

export const MovieImgItem = styled.img`
    width:100% ;
    height:100% ;
`

export const MovieInfo = styled.div`
    display:flex ;
    align-items:center ;
    width:50% ;

`
export const MovieInfoContainer = styled.div`
    align-items:center ;
    flex:1 ;
`


export const MovieInfoButton = styled.button`
    font-weight: 400;
    line-height: 1.5;
    background-color:${props => props.backgroundColor} ;
    color: #ffffff;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 4px;
    min-width:60px ;
    margin-top:24px ;
    margin-right:${props => props.marginRight} ;
    transition:all 0.3s ;

    &:hover{
        opacity:0.8 ;
    }
`


export const MovieInfoItem = styled.p`
    font-size:${props => props.fontsize ? props.fontsize : '14px'} ;
    font-weight:${props => props.fontWeight ? props.fontWeight : '400'} ;
    margin-bottom:4px ;

`

export const MovieInfoAge = styled.span`

display: inline-block;
    text-align: center;
    min-width: 30px;
    border-radius: 4px;
    background: #fb4226;
    color: #fff;
    font-size: 20px;
    padding: 0 5px;
    margin-right: 12px;
    font-weight: 600;
`


export const MovieVote = styled.div`
    display:flex ;
    align-items:center ;

    width:25% ;

`

export const MovieVoteContainer = styled.div`
`


export const MovieVoteCircle = styled.div`
    position: relative;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin: auto;
    background-color: rgba(0,0,0,.4);
    border: 7.5px solid #7ed321;
`
export const CircleBorder = styled.div`
    width: 140px;
    height: 140px;
    background: 0 0;

    border-radius: 50%;
    position: absolute;
`

export const CircleVote = styled.span`
    position: absolute;
    top: 50%;
    left: 47%;
    transform: translate(-50%,-50%);
    font-size: 80px;
    width: 100%;
    color: #fff;
    display: block;
    text-align: center;
`


export const CircleBorderVoteNum = styled.p`
    margin-top:16px ;
`



export const MovieShowTime = styled.div`
    background-color:black ;
    padding:48px 0 60px 0 ;
`
export const MovieShowTimeNav = styled.ul`
    /* display:flex ; */
    text-align:center ;
    /* justify-content:center ;
    align-items:center ; */
`

export const MovieShowTimeNavItem = styled.li`
    display:inline-block ;
    padding:10px 25px ;
    font-size:18px;
    list-style:none ;
    color:${props => props.active ? "#FB4226" : "white"} ;
    transform: ${props => props.active ? "scale(1.2)" : "scale(1)"} ;
    font-weight:400 ;
    transition:all 0.3s ;
    &:hover{
        transform:scale(1.2) ;
    }

`

export const TabContent = styled.div`
    color:black ;
    background-color:white ;
    width:70% ;
    margin:0 auto ;
    border-radius:10px ;
    min-height:480px ;
    display:${props => props.active ? "flex" : "none"} ;
    flex-wrap:wrap ;
    padding:20px;
`

export const Theaters = styled.div`
    width:25% ;
    padding:0 12px ;
    border-right:1px solid #e4e4e4 ;
    max-height:504px ;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 5px ;
        
    }
    &:hover::-webkit-scrollbar-track{
        background: #f1f1f1; 
        border-radius:4px ;
    }

    &:hover::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius:4px ;
    }
`

export const Theater = styled.div`
    cursor:pointer ;
    display:flex ;
    flex-wrap:wrap ;
    align-items:center ;
    background-color:${props => props.action ? "rgba(25,135,84,.4)" : "none"};
    border-radius: 8px;
`

export const Logo = styled.div`
    width:50px ;
    height:50px ;
    margin:20px ;

`

export const LogoItem = styled.img`
    width:100% ;
`


export const TheaterId = styled.span`
    font-size:16px ;
    text-transform:uppercase ;
`

export const TheaterShowTime = styled.div`
    width:75% ;
    padding:0 12px ;
    max-height:504px ;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 5px ;
        
    }
    &:hover::-webkit-scrollbar-track{
        background: #f1f1f1; 
        border-radius:4px ;
    }

    &:hover::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius:4px ;
    }
`

export const TheaterName = styled.div`
    text-align:center ;
    padding-bottom:16px ;
    margin-bottom:12px ;
    border-bottom: 1px solid #e4e4e4;

`

export const TheaterNameItem = styled.h3`
    font-size:18px ;
    color:#FB2426 ;
    margin-bottom:16px ;
`

export const ThearTimeShow = styled(Link)`
    display:inline-block ;
    min-width:160px ;
    margin:0 15px 15px 0;
    background-color: hsla(0,0%,96.5%,.5);
    padding: 10px;
    border: 1px solid #e4e4e4;
    text-decoration:none ;
    border-radius:5px ;
`

export const ThearTimeShowItem = styled.span`
    color: #108f3e;
    font-size:16px ;
`

export const InfomationContainer = styled.div`
    width:50% ;
    padding:20px ;
`


export const RowInfo = styled.div`
    display:flex ;
    align-items:center ;
    font-size:14px ;
    margin-bottom:20px ;
`

export const TitlteInfo = styled.h3`
    width:33% ;
`
export const ContentInfo = styled.p`
    width:67% ;
`
export const MovieContentTitle = styled.h3`
    margin-bottom:16px ;
`

export const MovieContentParagraph = styled.p`
    text-align: justify;
`

export const NoHaveTicket = styled.div`
    flex:1 ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#D1ECF1 ;

`

export const NoHaveTicketText = styled.h3`
    padding-bottom:16px ;

`

export const NoHaveTicketButton = styled.button`
    border:none ;
    outline:none ;
    background-color:#FB4226 ;
    color:#FFFFFF ;
    font-size:14px ;
    padding:12px 6px ;
    border-radius:6px ;
    font-weight:600 ;
    cursor:pointer ;
`