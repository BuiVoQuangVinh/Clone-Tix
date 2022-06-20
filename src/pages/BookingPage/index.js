import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useParams, useNavigate } from 'react-router-dom'


import {
  Booking,
  BookingConTainer,
  BookingMain,
  BookingSide,
  PopupContent,
  PopupInnerContainer,
  ButtonContainer,
  ButtonPopup,
} from './bookingpage.styled'
import CheckOutMain from './CheckOutMain'
import CheckOutSide from './CheckOutSide'

import LoadingPage from '../LoadingPage'
import Popup from '../../components/Popup'


import { postCheckOut } from '../../actions/CheckOut'
import { getMovieTicket } from '../../actions/MovieTicket'

export default function BookingPage() {

  const { checkOut, loadingCheckOut } = useSelector((state) => state.checkOutReducer)
  const { movieTicket, loadingMovieTicket } = useSelector((state) => state.movieTicketReducer)
  const param = useParams()


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [recall, setRecall] = useState(0)

  useEffect(() => {
    dispatch(getMovieTicket(param.id))
  }, [dispatch, param.id, recall])



  const user = JSON.parse(localStorage.getItem('user'))
  const taiKhoanNguoiDung = user?.taiKhoan



  const [trigger, setTrigger] = useState(false)
  const [messageBooking, setMessageBooking] = useState(false)
  const [danhSachVe, setDanhSachVe] = useState([]);
  const [listSeat, setListSeat] = useState([])

  const handleSelectTicket = (item) => {
    const { maGhe, tenGhe, giaVe } = item
    if (item.isSelect) {
      setDanhSachVe([...danhSachVe, { maGhe, giaVe }])
      setListSeat([...listSeat, tenGhe])
    }
    else {
      const index = danhSachVe.findIndex(item => item.maGhe === maGhe)
      danhSachVe.splice(index, 1)
      listSeat.splice(index, 1)
      setDanhSachVe([...danhSachVe])
      setListSeat([...listSeat])
    }
  }



  const handleSummit = (item) => {
    dispatch(postCheckOut(item))
    setDanhSachVe([])
    setListSeat([])
    setRecall(recall + 1)
  }

  if (!user) {
    return (
      <Navigate to='/' />
    )
  }


  const handleOnClick = () => {
    const { maLichChieu } = movieTicket?.thongTinPhim
    handleSummit({ maLichChieu, danhSachVe, taiKhoanNguoiDung })
    setTrigger(!trigger)
    setMessageBooking(true)
    setDanhSachVe([...[]])
    setListSeat([...[]])
  }

  return (
    <>
      {(loadingCheckOut || loadingMovieTicket) ?
        <LoadingPage />
        :
        <>
          <Popup
            trigger={messageBooking}
            handlePopup={() => setMessageBooking(false)}
          >
            <PopupInnerContainer>
              <PopupContent>
                {checkOut}
              </PopupContent>
              <ButtonContainer>
                <ButtonPopup
                  bg='#3085d6'
                  onClick={() => navigate("/")}
                >
                  ĐẾN TRANG CHỦ
                </ButtonPopup>

                <ButtonPopup
                  bg='#f50057'
                  onClick={() => setMessageBooking(false)}
                >
                  TIẾP TỤC ĐẶT VÉ
                </ButtonPopup>
              </ButtonContainer>
            </PopupInnerContainer>
          </Popup>

          <Popup
            trigger={trigger}
            handlePopup={setTrigger}
          >
            <PopupInnerContainer>
              <PopupContent>
                Bạn có muốn đặt vé không?
              </PopupContent>
              <ButtonContainer>
                <ButtonPopup
                  bg='#3085d6'
                  onClick={() => handleOnClick()}
                >
                  ĐỒNG Ý
                </ButtonPopup>

                <ButtonPopup
                  bg='#f50057'
                  onClick={() => setTrigger(!trigger)}
                >
                  KHÔNG
                </ButtonPopup>
              </ButtonContainer>
            </PopupInnerContainer>
          </Popup>
          <Booking>
            <BookingConTainer>
              <BookingMain>
                <CheckOutMain
                  onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                  seat={movieTicket}
                  taiKhoanNguoiDung={taiKhoanNguoiDung}
                />
              </BookingMain>

              <BookingSide>
                <CheckOutSide
                  listSeat={listSeat}
                  danhSachVe={danhSachVe}
                  thongTinPhim={movieTicket?.thongTinPhim}
                  trigger={trigger}
                  onPopup={(trigger) => setTrigger(trigger)}
                />
              </BookingSide>
            </BookingConTainer>
          </Booking>

        </>

      }


    </>

  )
}
