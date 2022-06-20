import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { postRegister } from '../../actions/Register'

import {
  RegisterPageStyled,
  RegisterMainContent,
  RegisterImg,
  RegisterImgItem,
  RegisterTitle,
  RegisterForm,
  RegisterFormGroup,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterFormHelperText,
  ButtonRegister,
  Register,
  LoginLink,
  RegisterCopyRight,
  RegisterCopyRightContent,
} from './registerpage.styled'

export default function RegisterPage() {


  const { error } = useSelector((state) => state.registerReducer)



  const [taiKhoanValid, setTaiKhoanValid] = useState({ mess: ``, isValid: false })
  const [hoTenValid, setHoTenValid] = useState({ mess: ``, isValid: false })
  const [emailValid, setEmailValid] = useState({ mess: ``, isValid: false })
  const [soDtValid, setsoDtValid] = useState({ mess: ``, isValid: false })
  const [matKhauValid, setMatKhauValid] = useState({ mess: ``, isValid: false })

  const [registerUser, setRegisterUser] = useState({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: 'GP09',
    maLoaiNguoiDung: 'KhachHang',
    hoTen: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setRegisterUser({ ...registerUser, [name]: value });
  }

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleError = (event) => {
    const { name, value } = event.target

    switch (name) {
      // kiểm tra tên nhân viên
      case 'hoTen': {
        if (value === "") {
          setHoTenValid({ ...hoTenValid, mess: `Tên không được để trống`, isValid: false })
          break;
        }
        else {
          const pattern = new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
          );
          // nếu tên hợp lệ
          if (pattern.test(value)) {
            setHoTenValid({ ...hoTenValid, mess: ``, isValid: true })
            break;
          }
          setHoTenValid({ ...hoTenValid, mess: `Tên không được có số và ký tự đặt biệt`, isValid: false })
          break;
        }
      }

      case 'email': {
        if (value === "") {
          setEmailValid({ ...emailValid, mess: `Email không được để trống`, isValid: false })
          break;
        }
        else {
          const patterm = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

          // nếu email hợp lệ
          if (patterm.test(value)) {
            setEmailValid({ ...emailValid, mess: ``, isValid: true })
            break;
          }
          setEmailValid({ ...emailValid, mess: `Email không hợp lệ`, isValid: false })
          break;
        }
      }

      case "soDt": {
        if (value === "") {
          setsoDtValid({ ...soDtValid, mess: `Số điện thoại không được để trống`, isValid: false })
          break;
        }

        else {
          const pattern = new RegExp("^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$");
          if (pattern.test(value)) {
            setsoDtValid({ ...soDtValid, mess: ``, isValid: true })
            break
          }
          setsoDtValid({ ...soDtValid, mess: `Số điện thoại không hợp lệ`, isValid: false })
          break;
        }

      }



      case "taiKhoan": {
        if (value === "") {
          setTaiKhoanValid({ ...taiKhoanValid, mess: `Tên tài khoản không được bỏ trống`, isValid: false })
          break
        }
        else {
          if (value.length < 6) {
            setTaiKhoanValid({ ...taiKhoanValid, mess: `Tên tài khoản phải trên 6 ký tự`, isValid: false })
            break
          }

          //  tài khoản bao gồm chữ, thường chữ hoa và số
          const pattern = new RegExp("^[a-zA-Z0-9]+$");
          if (pattern.test(value)) {
            // tài khoản hợp lệ không chứ ký tự đặc biệt
            setTaiKhoanValid({ ...taiKhoanValid, mess: ``, isValid: true })
            break
          }
          setTaiKhoanValid({ ...taiKhoanValid, mess: `Tài khoản không được có ký tự đặc biệt`, isValid: true })
          break
        }
      }

      case "matKhau": {
        if (value === "") {
          setMatKhauValid({ ...matKhauValid, mess: `Mật khẩu không được bỏ trống`, isValid: false })
          break;
        }
        else if (value.length < 6) {
          setMatKhauValid({ ...matKhauValid, mess: `Mật khẩu phải trên 6 ký tự`, isValid: false })
          break
        }

        else {
          setMatKhauValid({ ...matKhauValid, mess: ``, isValid: true })
          break;
        }
      }

      default: {
        break;
      }
    }
  }

  const handleRegister = (registerUser) => {
    dispatch(postRegister(registerUser,navigate ))
  
  }
  


  return (
    <RegisterPageStyled>
      <RegisterMainContent>
        <RegisterImg>
          <RegisterImgItem src="./img/authLayout/logo.png" alt="logo-img" />
        </RegisterImg>
        <RegisterTitle>
          Đăng ký
        </RegisterTitle>
        <RegisterForm>
          <RegisterFormGroup>
            <RegisterFormInput
              type="text"
              id="hoTen"
              name="hoTen"
              placeholder=' '
              onBlur={(evt) => handleError(evt)}
              onKeyUp={(evt) => handleError(evt)}
              onChange={(evt) => handleChange(evt)}
            />
            <RegisterFormLabel htmlFor="hoTen">Họ tên</RegisterFormLabel>
          </RegisterFormGroup>
          <RegisterFormHelperText>{hoTenValid.mess}</RegisterFormHelperText>

          <RegisterFormGroup>
            <RegisterFormInput
              type="text"
              id="email"
              name="email"
              placeholder=' '
              onBlur={(evt) => handleError(evt)}
              onKeyUp={(evt) => handleError(evt)}
              onChange={(evt) => handleChange(evt)}

            />
            <RegisterFormLabel htmlFor="email">Email</RegisterFormLabel>
          </RegisterFormGroup>
          <RegisterFormHelperText>{emailValid.mess}</RegisterFormHelperText>

          <RegisterFormGroup>
            <RegisterFormInput
              type="text"
              id="soDt"
              name="soDt"
              placeholder=' '
              onBlur={(evt) => handleError(evt)}
              onKeyUp={(evt) => handleError(evt)}
              onChange={(evt) => handleChange(evt)}
            />
            <RegisterFormLabel htmlFor="soDt">Số điện thoại</RegisterFormLabel>
          </RegisterFormGroup>
          <RegisterFormHelperText>{soDtValid.mess}</RegisterFormHelperText>


          <RegisterFormGroup>
            <RegisterFormInput
              type="text"
              id="taiKhoan"
              name="taiKhoan"
              placeholder=' '
              onBlur={(evt) => handleError(evt)}
              onKeyUp={(evt) => handleError(evt)}
              onChange={(evt) => handleChange(evt)}

            />
            <RegisterFormLabel htmlFor="taiKhoan">Tài Khoản</RegisterFormLabel>
          </RegisterFormGroup>
          <RegisterFormHelperText>{taiKhoanValid.mess}</RegisterFormHelperText>

          <RegisterFormGroup>
            <RegisterFormInput
              type="password"
              id="matKhau"
              name="matKhau"
              placeholder=' '
              onBlur={(evt) => handleError(evt)}
              onKeyUp={(evt) => handleError(evt)}
              onChange={(evt) => handleChange(evt)}
            />
            <RegisterFormLabel htmlFor="matKhau">Mật khẩu</RegisterFormLabel>
          </RegisterFormGroup>
          <RegisterFormHelperText>{matKhauValid.mess}</RegisterFormHelperText>

          <RegisterFormHelperText>{error}</RegisterFormHelperText>

          <ButtonRegister
            type='button'
            onClick={() => handleRegister(registerUser)}
            disabled={!(matKhauValid.isValid && taiKhoanValid.isValid && hoTenValid.isValid && emailValid.isValid && soDtValid.isValid)}
          >
            Đăng ký
          </ButtonRegister>
        </RegisterForm>
        <Register>
          <LoginLink to='#'></LoginLink>
          <LoginLink to='/login'>Đã có tài khoản ? Đăng nhập ngay</LoginLink>
        </Register>
        <RegisterCopyRight>
          <RegisterCopyRightContent>Copyright © Tix.vn 2022.</RegisterCopyRightContent>
        </RegisterCopyRight>
      </RegisterMainContent>
    </RegisterPageStyled>
  )
}
