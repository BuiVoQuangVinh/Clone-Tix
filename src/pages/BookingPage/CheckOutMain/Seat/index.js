import React, { useState } from 'react'

import {
    SeatStyled
} from './seat.styled'

export default function Seat(props) {

    const [isChoosed, setIsChosed] = useState(false)
    const seat = props.seat
    const handleSelectTicket = props.onSelectTicket


    const handleSelect = () => {
        const {tenGhe, maGhe, giaVe } = seat
        setIsChosed(!isChoosed)
        handleSelectTicket({ maGhe,tenGhe, giaVe, isSelect:!isChoosed })
    }

    const handleColor = (seat, isChoosed) => {
        if (isChoosed) {
            return '#39f107'
        }
        else if (seat?.taiKhoanNguoiDat) {
            return '#CCCCCC'
        }

        else if (seat?.loaiGhe === 'Vip') {
            return '#f7b500'
        }

        return '#3e515d'

    }


    return (
        <SeatStyled
            type='button'
            loaiGhe={seat?.loaiGhe}
            bg={handleColor(seat, isChoosed)}
            disabled={seat?.taiKhoanNguoiDat ? true : false}
            bought={seat?.taiKhoanNguoiDat ? true : false}
            onClick={(seat) => handleSelect(seat)}
        >{isChoosed ? seat?.tenGhe : ""}</SeatStyled>
    )
}
