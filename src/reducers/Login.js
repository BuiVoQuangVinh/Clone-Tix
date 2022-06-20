import {
    POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAIL
} from '../constans/Login'
import { LOGOUT_REQUEST } from '../constans/LogOut'

// kiểm tra xem user đã đăng nhập chưa
// nếu đăng nhập thông tin user sẽ được lưu ở local

const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    currentUser: currentUser,
    loading: false,
    error: null
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_LOGIN_REQUEST: {
            return { ...state, loading: true }
        }

        case POST_LOGIN_SUCCESS: {
            return { ...state, currentUser: action.payload.data, loading: false }
        }

        case POST_LOGIN_FAIL: {
            return { ...state, error: action.payload.error, loading: false }
        }

        case LOGOUT_REQUEST: {
            console.log('LOGOUT_REQUEST')
            return { ...state, currentUser: null, loading: false }

        }

        default: {
            return { ...state }
        }

    }
}

export default loginReducer;