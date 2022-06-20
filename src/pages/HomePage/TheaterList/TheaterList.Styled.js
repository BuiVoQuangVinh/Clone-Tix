import styled from 'styled-components/macro'

export const TheaterlistStyled = styled.div`
`

export const TheaterlistContainer = styled.div`
    width:50% ;
    margin:0 auto ;
    display:flex ;
    
`


export const TheaterlistLogo = styled.div`
    max-width:90px ;
    border: 1px solid #ebebec;
    max-height: 545px;
    overflow-x: hidden;
    overflow-y: auto;
`

export const TheaterlistLogoDetail = styled.div`
   width:90px ;
   height:90px ;
   padding:20px;
   opacity: ${props => props.active === "active" ? "1" : "0.7"};
   cursor: pointer;
   position:relative ;
    &::after{
    content: "";
    position: absolute;
    left: 50%;
    bottom: 3px;
    transform: translateX(-50%);
    background-color: ${props => props.active === "active" ? "#fb4226" : "#ebebec"};
    box-shadow: 0 -3px 10px 0 ${props => props.active === "active" ? "#fb4226" : "#ebebec"};
    height: 2px;
    width: calc(100% - 40px);
    }
`


export const TheaterlistLogoImg = styled.img`
    width:100% ;

   
`


export const TheaterlistDetail = styled.div`
    border: 1px solid #ebebec;
    max-height: 545px;
    overflow-x: hidden;
    overflow-y: auto;
    transition:all 0.3s ;
    &::-webkit-scrollbar{
        width: 5px ;
    }
    &:hover::-webkit-scrollbar-track{
        background: #f1f1f1; 
        border-radius:4px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius:4px ;
    }
  
    
`
export const TheaterlistInfo = styled.div`
    position:relative ;
    padding:20px ;
    opacity: ${props => props.active === "active" ? "1" : "0.7"};
    &::after{
        content: "";
        position: absolute;
        left: 50%;
        bottom: 2px;
        transform: translateX(-50%);
        background-color: ${props => props.active === "active" ? "#fb4226" : "#ebebec"};
        box-shadow: 0 -3px 10px 0 ${props => props.active === "active" ? "#fb4226" : "#ebebec"};
        height: 2px;
        width: calc(100% - 40px);
    }
   
`

export const TheaterlistInfoImgContainer = styled.div`
    display:flex ;
    width:280px ;
`

export const TheaterlistInfoImg = styled.img`
    width:50px ;
    height:50px ;
    border-radius:4px ;
`
export const TheaterlistInfoWrapeInfo = styled.div`
    padding-left:10px ;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const TheaterlistInfoName = styled.p`

`
export const TheaterlistInfoLocal = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`


export const TheaterlistMovies = styled.div`
    width:60% ;
    border: 1px solid #ebebec;
    max-height: 545px;

`

export const TheaterMovie = styled.div`
    max-height: 545px;
    overflow-x: hidden;
    overflow-y: auto;
    transition:all 0.3s ;
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

export const TheaterMovieContainer = styled.div`
    padding:20px ;
    cursor: pointer;
   position:relative ;
   transition:all 0.3s ;
    &::after{
    content: "";
    position: absolute;
    left: 50%;
    bottom: 3px;
    transform: translateX(-50%);
    background-color: #ebebec;
    box-shadow: 0 -3px 10px 0 #ebebec;
    height: 2px;
    width: calc(100% - 40px);
    }

    /* &:hover::after{
        background-color: #fb4226;
        box-shadow: 0 -3px 10px 0 #fb4226;
    } */
`

export const TheaterMovieInfo = styled.div`
    display:flex ;
`

export const TheaterMovieImg = styled.img`
    width:50px ;
    height:50px ;
    border-radius:4px ;
`

export const TheaterMovieWrapInfo = styled.div`
    padding-left:10px ;
`
export const TheaterMovieName = styled.p`
    font-weight: 700;

    color:#333 ;
`

export const TheaterMovieDescription = styled.span`
    color: #949494;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const TheaterMovieShowTimes = styled.div`
    padding-top:16px ;
`

export const TheaterMovieFormat = styled.p`
    color:#000000 ;
    font-size: 18px;
    font-weight: 500;
`
export const TheaterMovieShowTimesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    
`


export const TheaterMovieShowTimesButtonSpan = styled.span`
    margin-left:6px ;
    color: #9b9b9b;
    font-size :14px ;
    transition:all 0.3s ;
`
export const TheaterMovieShowTimesButton = styled.button`
    flex:0 0 30% ;
    display: block;
    cursor: pointer;
    float: left;
    margin: 0 10px 10px 0;
    background: hsla(0,0%,96.5%,.6);
    border: 1px solid #e4e4e4;
    padding:6px 12px ;
    border-radius: 7px;
    font-size: 18px;
    font-weight: 700;
    min-width: 20%;
    transition: all .5s;
    color:#108F3E ;
    &:hover ${TheaterMovieShowTimesButtonSpan}{
        color:#fb4226;
        
    }
`