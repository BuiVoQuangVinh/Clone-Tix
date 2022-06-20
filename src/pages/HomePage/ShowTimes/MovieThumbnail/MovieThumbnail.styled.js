
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'


export const MovieThumbnailImg = styled.div`
    cursor: pointer;
    position:relative ;
    
`
export const MovieThumbnailImgItem = styled.img`
    width:100% ;
    height:325.875px ;
    border-radius:5px ;
`  
export const HiddenButton = styled.div`
    display:none ;
    position:absolute ;
    left:50% ;
    top:50% ;
    transform:translate(-50%,-50%) ;
    transition: all 0.3s ;
`

export const HiddenButtonImg = styled.img`
    width:50px ;
`


export const MovieThumbnailDecription = styled.div`
    text-align:center ;
    height:40px ;
    line-height: 20px;
    margin-top:15px ;
` 

export const MovieThumbnailMovieName = styled.p`
    display:block ;
    text-align:center ;
    color:#000 ;
    font-size:18px ;
    font-weight:600 ;
    transition: all 0.3s ;
    line-height:20px ;
`

export const MovieThumbnailBuy = styled(Link)`
    display:none ;
    text-align:center ;
    text-decoration:none ;
    background: #fb4226;
    padding:10px 0 ;
    color:#ffffff;
    font-size:18px ;
    font-weight:600 ;
    border-radius:5px ;
    transition: all 0.3s ;
`

export const MovieThumbnailStyled = styled.div`
    padding:10px ;
    transition: all 0.3s;
    &:hover{
        ${HiddenButton}{
            display:block ;
            transition: all 0.3s;
        }
        ${MovieThumbnailMovieName}{
            display:none ;
            transition: all 0.3s;
        }
        ${MovieThumbnailBuy}{
            display:block ;
            transition: all 0.3s;
        }
    }

`   