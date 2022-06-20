import {
    GET_MOVIE_LIST_REQUEST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAIL
} from '../constans/MovieList'

const initialState = {
    movieList: [],
    loadingMovieList: false,
    errorMovieList: null,
}

const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_LIST_REQUEST: {

            return { ...state, loadingMovieList: true }
        }

        case GET_MOVIE_LIST_SUCCESS: {

            return { ...state, movieList: action.payload.data, loadingMovieList: false, errorMovieList: null }
        }

        case GET_MOVIE_LIST_FAIL: {
            return { ...state, errorMovieList: action.payload.error, loadingMovieList: false }
        }


        default: {
            return { ...state }
        }

    }
}

export default movieListReducer;