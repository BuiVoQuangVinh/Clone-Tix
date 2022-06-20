import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { postLogin } from '../../actions/Login';

import { Navigate } from 'react-router-dom'

import {
  LoginPageStyled,
  LoginMainContent,
  LoginImg,
  LoginImgItem,
  LoginTitle,
  LoginForm,
  LoginFormGroup,
  LoginFormLabel,
  LoginFormInput,
  LoginFormHelperText,
  ButtonLogin,
  Register,
  RegisterLink,
  LoginCopyRight,
  LoginCopyRightContent,
} from './loginpage.styled'

export default function LoginPage() {
  const { currentUser, error } = useSelector((state) => state.loginReducer)

  const [user, setUser] = useState({ taiKhoan: '', matKhau: '' })
  const [taiKhoanValid, setTaiKhoanValid] = useState({ mess: ``, isValid: false });
  const [matKhauValid, setMatKhauValid] = useState({ mess: ``, isValid: false });



  const dispatch = useDispatch();

  const handleLogin = (user) => {
    dispatch(postLogin(user))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value });
  }

  const handleError = (event) => {
    const { name, value } = event.target

    if (name === 'taiKhoan') {
      // kiểm tra rỗng
      if (value === "") {
        setTaiKhoanValid({ ...taiKhoanValid, mess: `Tên tài khoản không được bỏ trống`, isValid: false })
      }
      // kiểm tra ký tự >6
      else if (value.length < 6) {
        setTaiKhoanValid({ ...taiKhoanValid, mess: `Tên tài khoản phải trên 6 ký tự`, isValid: false })
      }
      // kiểm tra ký tự đặc biệt
      else {
        //  tài khoản bao gồm chữ, thường chữ hoa và số
        const pattern = new RegExp("^[a-zA-Z0-9]+$");

        if (pattern.test(value)) {
          // tài khoản hợp lệ không chứ ký tự đặc biệt
          setTaiKhoanValid({ ...taiKhoanValid, mess: ``, isValid: true })
          return
        }
        setTaiKhoanValid({ ...taiKhoanValid, mess: `Tài khoản không được có ký tự đặc biệt`, isValid: true })
        return

      }
    }

    // kiểm tra mật khẩu
    else {
      // kiểm tra rỗng
      if (value === "") {
        setMatKhauValid({ ...matKhauValid, mess: `Mật khẩu không được bỏ trống`, isValid: false })
      }
      // kiểm tra số lượng ký tự > 6
      else if (value.length < 6) {
        setMatKhauValid({ ...matKhauValid, mess: `Mật khẩu phải trên 6 ký tự`, isValid: false })

      }
      // hợp lệ
      else {
        setMatKhauValid({ ...matKhauValid, mess: ``, isValid: true })
      }
    }
  };

  // nếu người dùng đã đăng nhập chuyển người dùng về trang chủ
  if (currentUser) {
    return (
      <Navigate to='/' />
    )
  }


  return (
    <LoginPageStyled>
      <LoginMainContent>
        <LoginImg>
          <LoginImgItem src="./img/authLayout/logo.png" alt="logo-img" />
        </LoginImg>
        <LoginTitle>
          Đăng Nhập
        </LoginTitle>
        <LoginForm>
          <LoginFormGroup>
            <LoginFormInput
              type="text"
              id="taiKhoan"
              name="taiKhoan"
              placeholder=' '
              value={user.taiKhoan}
              onBlur={(evt) => handleError(evt)}
              onKeyUp={(evt) => handleError(evt)}
              onChange={(evt) => handleChange(evt)}
            />
            <LoginFormLabel htmlFor="taiKhoan">Tài Khoản</LoginFormLabel>
          </LoginFormGroup>
          <LoginFormHelperText>{taiKhoanValid.mess}</LoginFormHelperText>
          <LoginFormGroup>
            <LoginFormInput
              type="password"
              id="matKhau"
              name="matKhau"
              placeholder=' '
              value={user.matKhau}
              onBlur={(evt) => handleError(evt)}
              onKeyUp={(evt) => handleError(evt)}
              onChange={(evt) => handleChange(evt)}
            />
            <LoginFormLabel htmlFor="matKhau">Mật khẩu</LoginFormLabel>
          </LoginFormGroup>
          <LoginFormHelperText>{matKhauValid.mess}</LoginFormHelperText>

          <LoginFormHelperText>{error}</LoginFormHelperText>

          <ButtonLogin
            type='button'
            onClick={() => handleLogin(user)}
            disabled={!(matKhauValid.isValid && taiKhoanValid.isValid)}
          >
            ĐĂNG NHẬP
          </ButtonLogin>
        </LoginForm>
        <Register>
          <RegisterLink to='#'></RegisterLink>
          <RegisterLink to='/register'>Chưa có tài khoản? Đăng ký ngay</RegisterLink>
        </Register>
        <LoginCopyRight>
          <LoginCopyRightContent>Copyright © Tix.vn 2022.</LoginCopyRightContent>
        </LoginCopyRight>
      </LoginMainContent>
    </LoginPageStyled>
  )
}
