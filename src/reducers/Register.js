import {
    POST_REGISTER_REQUEST,
    POST_REGISTER_SUCCESS,
    POST_REGISTER_FAIL
} from '../constans/Register'

const initialState = {
    registerUser: null,
    loading: false,
    error: null,
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REGISTER_REQUEST: {
            console.log('POST_REGISTER_REQUEST')
            return { ...state, loading: true,registerUser:null }
        }

        case POST_REGISTER_SUCCESS: {
            console.log('POST_REGISTER_SUCCESS')

            return { ...state, registerReducer: action.payload.data, loading: false, error: null }
        }

        case POST_REGISTER_FAIL: {
            console.log('POST_REGISTER_FAIL')

            return { ...state, error: action.payload.error, loading: false, registerReducer: null }
        }



        default:
            return { ...state }
    }
}

export default registerReducer;