import {
    POST_CHECKOUT_REQUEST,
    POST_CHECKOUT_SUCCESS,
    POST_CHECKOUT_FAIL,
} from '../constans/CheckOut'

import axiosClient from '../utils/axiosClient'

let token = "";
const user = localStorage.getItem("user");
if (user) {
    const { accessToken } = JSON.parse(user);
    token = accessToken;
}


export const postCheckOut = (listTicket) => {
    return (dispatch) => {
        dispatch({ type: POST_CHECKOUT_REQUEST })
        axiosClient.post('/QuanLyDatVe/DatVe',
            listTicket,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )
            .then((result) => {
                dispatch({
                    type: POST_CHECKOUT_SUCCESS,
                    payload: { data: result.data }
                })
                

            })
            .catch((error) => {
                dispatch({
                    type: POST_CHECKOUT_FAIL,
                    payload: { error: error.response.data }
                })
            }

            )

    }

}