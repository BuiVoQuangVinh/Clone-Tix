import styled from 'styled-components'

export const CheckOutSideStyled = styled.div`
    box-shadow: 0 0 15px rgba(0,0,0,.3);
    height:100% ;
    padding:0 16px ;
    position:relative ;
`

export const SideWrap = styled.div`
    border-bottom: 1px dashed #ccc;
    min-height: 40px;
`
export const SideWrapContainer = styled.div`
    padding:${props => props.padding} ;
    display:flex ;
    justify-content:space-between ;

`

export const SideItem = styled.p`
    /* text-align:${props => props.textAlign} ; */
    margin:${props => props.textAlign === 'center' ? "0 auto" : ""} ;
    color:${props => props.color} ;
    font-size:${props => props.fontSize} ;
    font-weight:${props => props.fontWeight} ;
`

export const CheckOutConfirm = styled.div`
    position:absolute ;
    bottom:0 ;
    left:0 ;
    width:100% ;
    padding:12px ;

`

export const CheckOutConfimButton = styled.button`
    cursor: ${props=>props.isTrue?"not-allowed":"pointer"};
    width:100% ;
    font-size:24px ;
    font-weight:600 ;
    background-color:#44c020 ;
    color:#fff ;
    padding:20px 0 ;
    border:none ;
    border-radius:6px ;
    outline:none ;
    opacity:${props=>props.isTrue?"0.7":"1"} ;
`

export const SeatNumber = styled.span`
    display:inline-block ;
    margin-left:12px ;
`