import {
    POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAIL
} from '../constans/Login'

import axiosClient from '../utils/axiosClient'

export const postLogin = (loginUser) => {
    return (dispatch) => {
        dispatch({ type: POST_LOGIN_REQUEST });
        axiosClient.post("/QuanLyNguoiDung/DangNhap",loginUser)
            .then((result) => {
                // Đăng nhập thành công lưu thông tin user xuống localStorage
                localStorage.setItem("user", JSON.stringify(result.data))
                dispatch({
                    type: POST_LOGIN_SUCCESS,
                    payload: { data: result.data }
                })
                alert('Đăng nhập thành công')  

            })
            .catch((error) => {
                dispatch({
                    type: POST_LOGIN_FAIL,
                    payload: { error: error.response.data }
                })
            })
    }
}

