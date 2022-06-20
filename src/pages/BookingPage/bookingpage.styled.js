import styled from 'styled-components/macro'

export const Booking = styled.div`
    height:100vh ;
`

export const BookingConTainer = styled.div`
    display:flex ;
    flex-wrap:wrap ;
    height:100% ;
`

export const BookingMain = styled.div`
    width:75% ;
    height:100% ;
`

export const BookingSide = styled.div`
    width:25% ;
    height:100% ;
`


export const PopupContent = styled.p`
    font-size:18px ;
    margin-bottom:24px ;
`
export const PopupInnerContainer = styled.div`
`


export const ButtonContainer = styled.div`
    display:flex ;
    justify-content:end ;
`

export const ButtonPopup = styled.button`
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    font-size:14px ;
    color:white ;
    background-color:${props => props.bg} ;
    padding:12px ;
    margin:0 18px ;
    border:none ;
    outline:none ;
    border-radius:6px ;
    cursor: pointer;
`