import styled from 'styled-components/macro'

export const PopupStyled = styled.div`
   position: fixed;
    z-index:999 ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    width:100% ;
    height:100% ;
`

export const PopupInner = styled.div`
    border-radius:6px ;
    position:relative ;
    padding:32px ;
    width:100% ;
    max-width:480px ;
    background-color:white ;
    z-index:100 ;
`

export const Blur = styled.div`
   position: fixed;
    top:0 ;
    left:0 ;
    width:100% ;
    height:100% ;
    background-color:rgba(0,0,0,0.2) ;
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