import React from 'react'
import { useSelector } from 'react-redux'

import LogOut from '../Logout'

import {
  HeaderStyled,
  HeaderContainer,
  // HeaderLogo,
  HeaderLogoButton,
  HeaderLogoImg,
  HeaderNav,
  HeaderNavItem,
  HeaderLogin,
  HeaderLoginItem,
  HeaderLoginImg,
  HeaderLoginText,
  LinkStyled,
} from './header.styled'


export default function Header() {
  const { currentUser } = useSelector((state) => state.loginReducer)


  return (
    <HeaderStyled>
      <HeaderContainer>
        <HeaderLogoButton>
          <LinkStyled to='/'>
            <HeaderLogoImg src="/img/header/logo.png" ></HeaderLogoImg>
          </LinkStyled>
        </HeaderLogoButton>
        <HeaderNav>
          <HeaderNavItem>Lịch Chiếu</HeaderNavItem>
          <HeaderNavItem>Cụm Rạp</HeaderNavItem>
          <HeaderNavItem>Tin Tức</HeaderNavItem>
          <HeaderNavItem>Ứng Dụng</HeaderNavItem>

        </HeaderNav>
        <HeaderLogin>
          <HeaderLoginItem>
            <HeaderLoginImg src="/img/header/avatar.png" />
            <HeaderLoginText>
              {currentUser ?
                <LinkStyled to='/'>{currentUser.taiKhoan}</LinkStyled>
                :
                <LinkStyled to='/login'>Đăng nhập</LinkStyled>}

            </HeaderLoginText>
          </HeaderLoginItem>

          <HeaderLoginItem
            marginLeft={'10px'}
            paddingLeft={'10px'}
            borderLeft={'1px solid #9B9B9B'}>

            {currentUser ?
              <LogOut /> :
              <LinkStyled to='/register'>Đăng ký</LinkStyled>}
          </HeaderLoginItem>

        </HeaderLogin>
      </HeaderContainer>
    </HeaderStyled>
  )
}
