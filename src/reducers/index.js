import { combineReducers } from "redux";


import movieListReducer from './MovieList'
import theaterListReducer from "./TheaterList";
import loginReducer from "./Login";
import registerReducer from './Register'
import movieInfoReducer from './MovieInfo'
import checkOutReducer from './CheckOut'
import movieTicketReducer from './MovieTicket'

const rootReducer = combineReducers({
    movieListReducer,
    theaterListReducer,
    loginReducer,
    registerReducer,
    movieInfoReducer,
    checkOutReducer,
    movieTicketReducer,
})

export default rootReducer