import {
    GET_MOVIE_TICKET_REQUEST,
    GET_MOVIE_TICKET_SUCCESS,
    GET_MOVIE_TICKET_FAIL
} from '../constans/MovieTicket'

const initialState = {
    movieTicket: null,
    loadingMovieTicket: false,
    errorMovieTicket: null
}

const movieTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_TICKET_REQUEST: {
            return {
                ...state, 
                movieTicket: null,
                loadingMovieTicket: true,
                errorMovieTicket: null
            }
        }

        case GET_MOVIE_TICKET_SUCCESS: {
            return {
                ...state, 
                movieTicket: action.payload.data,
                loadingMovieTicket: false,
            }
        }

        case GET_MOVIE_TICKET_FAIL: {
            return {
                ...state, 
                loadingMovieTicket: false,
                errorMovieTicket: action.payload.error
            }
        }

        default: {
            return { ...state }
        }
    }
}

export default movieTicketReducer