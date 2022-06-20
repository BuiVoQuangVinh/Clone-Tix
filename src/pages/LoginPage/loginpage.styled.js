import styled from 'styled-components'
import { Link } from "react-router-dom";

export const LoginPageStyled = styled.div`
    width:420px ;
    min-height:450px ;
    border-radius:10px ;
    position: absolute;
    top:50% ;
    left:50% ;
    transform:translate(-50%,-50%) ;
    background-color:white ;
`

export const LoginMainContent = styled.div`
     padding:0 20px ;
`

export const LoginTitle = styled.h1`
    text-align:center ;
    font-size:24px ;
    font-weight:400 ;
`
export const LoginImg = styled.div`
    width:50px ;
    height:50px ;
    margin:10px auto 0 auto ;   
`
export const LoginImgItem = styled.img`
    width:100% ;
    border-radius:50% ;
    border:1px solid #fb4226 ;
`

export const LoginForm = styled.form`
   
`

export const LoginFormGroup = styled.div`
    margin-top:16px ;
    position:relative ;
`
export const LoginFormLabel = styled.label`
    position:absolute ;
    top:50% ;
    left:22px ;
    transform:translateY(-50%) ;
    pointer-events:none ;
    color:#999 ;
    transition:all 0.3s ease ;
`

export const LoginFormInput = styled.input`
    width:100% ;
    line-height: 30px;
    padding:10px 20px  ;
    outline:none ;
    border-radius:4px ;
    border: 2px solid #999;
    font-size:16px ;
    &:focus {
        border: 2px solid rgb(63,81,181);  
    }

    &:not(:placeholder-shown) + ${LoginFormLabel},
    &:focus + ${LoginFormLabel}{
        top:0 ;
        left: 10px;
        color:rgb(63,81,181) ;
        display:inline-block ;
        padding:5px 10px;
        background-color:white ;
    }


`

export const LoginFormHelperText = styled.p`
    margin:0 14px ;
    margin-top:4px ;
    font-size:12px ;
    color: #f44336;
    display: block ;
`
export const ButtonLogin = styled.button`
    width:100% ;
    color:white ;
    cursor: pointer;
    background-color:rgb(63,81,181) ;
    opacity:${props=>props.disabled?".7":"1"} ;
    padding:12px 0 ;
    font-size:14px ;
    border-radius:10px ;
    border:none ;
    outline:none ;
    margin-top:24px ;   
    margin-bottom:16px ;
    &:hover{
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }
`

export const Register = styled.div`
    display: flex;
    justify-content: space-around;
`


export const RegisterLink = styled(Link)`
    color: #3f51b5;
    font-size:14px;
    text-decoration:none ;
    &:hover{
        text-decoration:underline ;
    }
`



export const LoginCopyRight = styled.div`
    margin-top:64px ;
    text-align:center ;
`

export const LoginCopyRightContent = styled.p`
`