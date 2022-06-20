import styled from 'styled-components/macro'


export const NewsStyled = styled.div`
`
export const NewsContainer = styled.div`
    width:50% ;
    margin:0 auto; 
`

export const NewsTitle = styled.div`

`

export const NewsUl = styled.ul`
    display:flex ;
    justify-content:center ;
`

export const NewsLi = styled.li`
    cursor:pointer ;
    font-size: 24px;
    display:inline ;
    list-style:none ;
    padding:8px 16px ;
    color: ${props => props.color};
    transform:scale(${props => props.transform});
    transition:all 0.3s ;
    &:hover{
    transform:scale(1);
    }
`

export const NewsContent = styled.div`
    display:${props=>props.display} ;
`

export const NewsContentTop = styled.div`
    display:flex ;
`


export const NewsItem = styled.div`
    flex:1 ;
    padding:0 7.5px 20px 7.5px ;
    
`
export const NewsImgContainer = styled.div`
    margin-bottom:10px ;
`

export const NewsItemImg = styled.img`
    width:100% ;
    height:100% ;
    border-radius:4px ;
    
`
export const NewsItemInfo = styled.div`
`
export const NewsItemTitle = styled.h3`
    height: 40px;
    font-size:16px ;
    font-weight:600 ;
    line-height:20px ;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-bottom:5px ;
    cursor: pointer;
    transition:all 0.3s ;
    &:hover{
        color:#fb4226 ;
    }

`
export const NewsItemDiscription = styled.p`
    color: #4a4a4a;
    height:55px ;
    overflow:hidden ;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 13px;
    margin-bottom:15px ;
`
export const NewsInteract = styled.div`
    display:flex ;
`

export const NewsInteractSpan = styled.span`
    display:flex ;
    margin-right:25px ;
`


export const NewsInteractItem = styled.img`
    width:20px ;
    height:20px ;
    margin-right:10px ;
    cursor: pointer;
    transition:all 0.3s ;
    &:hover{
        transform:scale(1.1) ;
    }
`

export const NewsInteractNumber = styled.span`
`



export const NewsContentBottom = styled.div`
    display:flex ;
`
export const NewsItemSub = styled.div`
    display:flex ;
    align-items:center ;
    margin-bottom:10px ;
    cursor: pointer;
`


export const NewsItemSubImg= styled.img`
    width:50px ;
    height:50px ;
    object-fit: cover;
    margin-right:10px ;
    border-radius:4px ;
`

export const NewsItemSubInfo = styled.p`
    width:228px ;
    height:40px ;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    transition:all 0.3s ;
    &:hover{
        color:#fb4226  ;
    }
`
