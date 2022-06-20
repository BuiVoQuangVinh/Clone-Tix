import styled from 'styled-components/macro'



export const CheckOutMainStyled = styled.div`

`

export const CheckOutHeader = styled.div`
    background: #fff;
    height: 60px;
    box-shadow: 0 0 15px rgba(0,0,0,.3);
    z-index:99 ;
    position: fixed;
    top: 0;
    left: 0;
    width:75%;
`

export const HeaderContainer = styled.div`
    display:flex ;
    flex-wrap:wrap ;
    justify-content:space-between ;
    align-items:center ;
    padding:0 20px ;
`
export const Logo = styled.div`
    cursor: pointer;
    width:50px ;
    height:50px ;

`

export const LogoImg = styled.img`
    width:100% ;
    height:100% ;
`

export const User = styled.div`
    display:flex ;
    align-items:center ;
`

export const UserImg = styled.div`
    width: 30px;
    height: 30px;
    margin-right:12px ;
`

export const UserImgItem = styled.img`
    width:100% ;
    height:100% ;
    border-radius: 50%;
`

export const UserName = styled.p``



export const CheckOutMainContent = styled.div`
    margin-left:80px ;
    margin-top:80px ;
`


export const CheckOutInfo = styled.div`
    display:flex ;
    
`

export const MovieImg = styled.div`
    width:45px ;
    height:45px ;
    margin-right:24px ;
`

export const MovieImgItem = styled.img`
    width:100% ;
    height:100% ;
    border-radius:4px ;

`
export const CheckOutAdress = styled.div`
  
`
export const CheckOutAdressItem = styled.p`
    color:${props => props.color} ;
    font-size:${props => props.fontSize} ;
`


export const Screen = styled.div`
    margin-top:24px ;
`
export const ScreenImg = styled.div`
    width:80% ;
    margin:0 auto ;
`

export const ScreenImgItem = styled.img`
    width:100% ;
`


export const SeatMap = styled.div`
    width:70% ;
    margin:0 auto ;
`
export const SeatMapRow = styled.div`
    display:flex ;
    margin-bottom:8px ;
    flex-wrap:wrap ;
    justify-content:space-between ;
    align-items:center ;
`
export const SeatMapRowItem = styled.div`
    width:5% ;
    font-size:16px ;
    font-weight:600 ;
`



export const SeatInfo = styled.div`
    margin-top:16px ;
`

export const SeatInfoContainer = styled.div`
    display:flex ;
    justify-content:center;

`

export const SeatInfoItem = styled.div`
    margin:10px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SeatInfoImg = styled.div`
    width:18px ;
    height:18px ;
    background-color:${props => props.color} ;
    border-radius:4px ;
`
export const SeatInfoText = styled.p`

`