import React from 'react'

import {
  CheckOutSideStyled,
  SideWrap,
  SideWrapContainer,
  SideItem,
  CheckOutConfirm,
  CheckOutConfimButton,
  SeatNumber,
} from './CheckOutSide.styled'

export default function CheckOutSide(props) {
  const danhSachVe = props.danhSachVe;
  const thongTinPhim = props.thongTinPhim
  // const taiKhoanNguoiDung = props.taiKhoanNguoiDung
  // const handleSummit = props.onSummit
  const trigger = props.trigger
  const handlePopup = props.onPopup
  const listSeat = props.listSeat



  const handleClick = () => {

    handlePopup(!trigger)
    // alert("hello")
    // const { maLichChieu } = thongTinPhim
    // handleSummit({ maLichChieu, danhSachVe, taiKhoanNguoiDung })
  }

  const price = danhSachVe?.reduce((total, ticket) => {
    return total + ticket?.giaVe;
  }, 0);


  return (
    <CheckOutSideStyled>
      <SideWrap>
        <SideWrapContainer
          padding='20px 0'
        >
          <SideItem
            textAlign='center'
            color='#44c020'
            fontSize='32px'
            fontWeight='600'
          >{price} đ</SideItem>
        </SideWrapContainer>
      </SideWrap>

      <SideWrap>
        <SideWrapContainer
          padding='20px 0'
        >
          <SideItem
            textAlign='left'
            color='#333'
            fontSize='14px'
            fontWeight='600'
          >{thongTinPhim?.tenPhim}</SideItem>
        </SideWrapContainer>
      </SideWrap>

      <SideWrap>
        <SideWrapContainer
          padding='20px 0'
        >
          <SideItem
            textAlign='left'
            color='#333'
            fontSize='14px'
            fontWeight='400'
          >Ngày giờ chiếu:
          </SideItem>

          <SideItem
            textAlign='left'
            color='#333'
            fontSize='14px'
            fontWeight='600'
          >{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
          </SideItem>
        </SideWrapContainer>
      </SideWrap>


      <SideWrap>
        <SideWrapContainer
          padding='20px 0'
        >
          <SideItem
            textAlign='left'
            color='#333'
            fontSize='14px'
            fontWeight='400'
          >Cụm rạp:
          </SideItem>

          <SideItem
            textAlign='left'
            color='#333'
            fontSize='14px'
            fontWeight='600'
          >{thongTinPhim?.tenCumRap}
          </SideItem>
        </SideWrapContainer>
      </SideWrap>


      <SideWrap>
        <SideWrapContainer
          padding='20px 0'
        >
          <SideItem
            textAlign='left'
            color='#333'
            fontSize='14px'
            fontWeight='400'
          >Rạp:
          </SideItem>

          <SideItem
            textAlign='left'
            color='#333'
            fontSize='14px'
            fontWeight='600'
          >{thongTinPhim?.tenRap}
          </SideItem>
        </SideWrapContainer>
      </SideWrap>

      <SideWrap>
        <SideWrapContainer
          padding='20px 0'
        >
          <SideItem
            textAlign='left'
            color='#333'
            fontSize='14px'
            fontWeight='400'
          >Ghế
          </SideItem>

          <SideItem
            textAlign='left'
            color='#333'
            fontSize='14px'
            fontWeight='600'
          >{listSeat.map((item) => {
            return (
              <SeatNumber key={item}>
                {item}
              </SeatNumber>
            )
          })}
          </SideItem>
        </SideWrapContainer>
      </SideWrap>

      <CheckOutConfirm>
        <CheckOutConfimButton
          onClick={() => handleClick()}
          disabled={price <= 0}
          isTrue={price <= 0}
        >Đặt Vé</CheckOutConfimButton>
      </CheckOutConfirm>

    </CheckOutSideStyled>
  )
}
