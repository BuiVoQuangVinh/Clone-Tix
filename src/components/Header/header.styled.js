import styled from 'styled-components/macro';
import { Link } from "react-router-dom";


export const HeaderStyled = styled.div`
    background-color:#ffffff ;
    opacity:0.9 ;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    box-shadow: 0 0 15px rgb(0 0 0 / 30%);
    z-index: 100;
    
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items:center ;
    justify-content: space-between;
    padding: 0 15px;
  
`
// export const HeaderLogo = styled.div`
//     margin:5px 0 ;
// `
export const HeaderLogoButton = styled.button`
    height:60px ;
    padding:5px 0 ;
    background:none ;
    border:none ;
    outline:none ;
`

export const HeaderLogoImg = styled.img`
    width: 50px;
`

export const HeaderNav = styled.ul`
    display: flex;
    flex-direction: row;
    color:#000000 ;
    font-weight:600 ;

`
export const HeaderNavItem = styled.li`
  list-style: none;
  padding:8px 16px;
  cursor: pointer;
  transition:all 0.3s ;
  &:hover{
      color:#fb4226 ;
  }

`
export const HeaderLogin = styled.div`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    color: #9b9b9b;
    font-size:14px ;
`

export const HeaderLoginItem = styled.p`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    padding-left:${(props) => props.paddingLeft} ;
    margin-left:${(props) => props.marginLeft} ;
   border-left:${(props) => props.borderLeft} ;

`

export const HeaderLoginImg = styled.img`
    width:30px ;
    height:30px ;
    margin-right:10px ;
    border-radius:50% ;
`

export const HeaderLoginText = styled.span`

`

export const LinkStyled = styled(Link)`
    text-decoration:none ;
    color:#9B9B9B ;
    transition:all 0.3s ;
 
`