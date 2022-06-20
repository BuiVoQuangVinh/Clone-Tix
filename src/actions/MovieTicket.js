import {
    GET_MOVIE_TICKET_REQUEST,
    GET_MOVIE_TICKET_SUCCESS,
    GET_MOVIE_TICKET_FAIL
} from '../constans/MovieTicket'

import axiosClient from '../utils/axiosClient'

export const getMovieTicket = (id) => {
    return (dispatch) => {
        dispatch({ type: GET_MOVIE_TICKET_REQUEST })
        axiosClient.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
            .then((result) => {
                dispatch({
                    type: GET_MOVIE_TICKET_SUCCESS,
                    payload: { data: result.data }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_MOVIE_TICKET_FAIL,
                    payload: { error: error.response.data }
                })
            }
            )
    }

}