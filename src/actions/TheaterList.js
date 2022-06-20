import {
    GET_THEATER_LIST_REQUEST,
    GET_THEATER_LIST_SUCCESS,
    GET_THEATER_LIST_FAIL,
} from '../constans/TheaterList'

import axiosClient from '../utils/axiosClient'

export const getTheaterList = () => {
    return (dispath) => {
        dispath({ type: GET_THEATER_LIST_REQUEST });
        axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09")
            .then((result) => {
                dispath({
                    type: GET_THEATER_LIST_SUCCESS,
                    payload: { data: result.data },
                })
            })
            .catch((error) => {
                dispath({
                    type: GET_THEATER_LIST_FAIL,
                    payload: { error: error.response.data }
                })
            })
    }
}