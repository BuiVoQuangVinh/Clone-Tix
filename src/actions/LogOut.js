import {
    LOGOUT_REQUEST
} from '../constans/LogOut'


export  const logOut = () => {
    localStorage.removeItem("user")
    return (dispatch) => {
        dispatch({ type: LOGOUT_REQUEST })
    }
}