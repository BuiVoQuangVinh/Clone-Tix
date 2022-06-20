import {
    GET_THEATER_LIST_REQUEST,
    GET_THEATER_LIST_SUCCESS,
    GET_THEATER_LIST_FAIL,
} from '../constans/TheaterList'

const initialState = {
    theaterList: null,
    loadingTheaterList: false,
    errorTheaterList: null,
}

const theaterListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_THEATER_LIST_REQUEST: {
            return { ...state, theaterList: null, loadingTheaterList: true, errorTheaterList: null };
        }

        case GET_THEATER_LIST_SUCCESS: {
            return { ...state, theaterList: action.payload.data, loadingTheaterList: false };
        }

        case GET_THEATER_LIST_FAIL: {
            return { ...state, errorTheaterList: action.payload.error, loadingTheaterList: false };
        }


        default: {
            return { ...state };
        }


    }
}

export default theaterListReducer