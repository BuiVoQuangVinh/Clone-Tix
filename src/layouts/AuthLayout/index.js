import React from 'react'

import {AuthLayoutStyled} from './authLayout.styled'

export default function AuthLayout(props) {
  return (
    <AuthLayoutStyled backGround = '/img/authLayout/bg.jpg' >
        {props.children}
    </AuthLayoutStyled>
  )
}
