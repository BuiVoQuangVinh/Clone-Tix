import {
    GET_MOVIE_INFO_REQUEST,
    GET_MOVIE_INFO_SUCCESS,
    GET_MOVIE_INFO_FAIL,
} from '../constans/MovieInfo'

import axiosClient from '../utils/axiosClient'

export const getMovieInfo = (id) => {
    return (dispatch) => {
        dispatch({ type: GET_MOVIE_INFO_REQUEST });
        axiosClient.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            .then((result) => {
                dispatch({
                    type: GET_MOVIE_INFO_SUCCESS,
                    payload: { data: result.data }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_MOVIE_INFO_FAIL,
                    payload: { error: error.response.data }
                })
            })

    }
}