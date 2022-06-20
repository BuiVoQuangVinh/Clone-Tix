import {
    POST_REGISTER_REQUEST,
    POST_REGISTER_SUCCESS,
    POST_REGISTER_FAIL
} from '../constans/Register'

// import { useNavigate } from 'react-router-dom';

import axiosClient from "../utils/axiosClient";




export const postRegister = (registerUser,navigate) => {
  
    return (dispatch) => {
        dispatch({ type: POST_REGISTER_REQUEST });
        axiosClient.post("/QuanLyNguoiDung/DangKy", registerUser)
        .then((result) => {
                // nếu đăng ký thành công lưu user vừa đăng ký vào local storage
                localStorage.setItem("user", JSON.stringify(result.data))
                dispatch({
                    type: POST_REGISTER_SUCCESS,
                    payload: { data: result.data }
                })            
                alert('Đăng ký thành công')  
                navigate('/')
            }

            )
            .catch((error) => {
                dispatch({
                    type: POST_REGISTER_FAIL,
                    payload: { error: error.response.data }
                })
            }

            )


    }

}