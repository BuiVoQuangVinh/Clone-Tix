import {
    GET_MOVIE_INFO_REQUEST,
    GET_MOVIE_INFO_SUCCESS,
    GET_MOVIE_INFO_FAIL
} from '../constans/MovieInfo'

const initialState = {
    movie: null,
    loadding: false,
    error: null
}


const movieInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_INFO_REQUEST: {         
            return { ...state, loadding: true, movie: null, error: null }
        }

        case GET_MOVIE_INFO_SUCCESS: {
            return { ...state, loadding: false, movie: action.payload.data }
        }

        case GET_MOVIE_INFO_FAIL: {

            return { ...state, loadding: false, error: action.payload.error }
        }


        default: {
            return { ...state }
        }

    }

}

export default movieInfoReducer