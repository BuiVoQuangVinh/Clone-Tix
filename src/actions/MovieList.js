import {
    GET_MOVIE_LIST_REQUEST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAIL,
} from '../constans/MovieList'

import axiosClient from '../utils/axiosClient'

export const getMovieList = () => {
    return (dispatch) => {
        dispatch({ type: GET_MOVIE_LIST_REQUEST });
        axiosClient.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP09")
            .then((result) => {
                dispatch({
                    type: GET_MOVIE_LIST_SUCCESS,
                    payload: { data: result.data }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_MOVIE_LIST_FAIL,
                    payload: { error: error.response.data }
                })
            })
    }
}