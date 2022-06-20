import React from 'react'
import { useDispatch } from 'react-redux'

import { logOut } from '../../actions/LogOut'
import { Navigate } from 'react-router-dom'


export default function LogOut() {

    const dispatch = useDispatch();

    const clearDataStorage = () => {
        dispatch(logOut())
        return (
            <Navigate to='/' />
        )
    }

    return (
        <span
            style={{ cursor: "pointer" }}
            onClick={() => clearDataStorage()}
        >
            Đăng xuất
        </ span>
    )
}
