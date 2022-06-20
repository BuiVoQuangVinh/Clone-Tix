import {
    POST_CHECKOUT_REQUEST,
    POST_CHECKOUT_SUCCESS,
    POST_CHECKOUT_FAIL,
} from '../constans/CheckOut'

const initialState = {
    checkOut: null,
    loadingCheckOut: false,
    erorrCheckOut: null,
}

const checkOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CHECKOUT_REQUEST: {
            return { ...state, checkOut: null, loading: true, erorr: null, }
        }
        case POST_CHECKOUT_SUCCESS: {
            return { ...state, loading: false, checkOut: action.payload.data }
        }

        case POST_CHECKOUT_FAIL: {
            return { ...state, loading: false, erorr: action.payload.error }
        }


        default: {
            return { ...state }
        }
    }

}

export default checkOutReducer ;