import React from 'react'


// import seat from '../../../Api/test.json'


import {
    CheckOutMainStyled,
    CheckOutHeader,
    HeaderContainer,
    Logo,
    LogoImg,
    User,
    UserImg,
    UserImgItem,
    UserName,
    CheckOutMainContent,
    CheckOutInfo,
    MovieImg,
    MovieImgItem,
    CheckOutAdress,
    CheckOutAdressItem,
    Screen,
    ScreenImg,
    ScreenImgItem,
    SeatMap,
    SeatMapRow,
    SeatMapRowItem,
    SeatInfo,
    SeatInfoContainer,
    SeatInfoItem,
    SeatInfoImg,
    SeatInfoText,
} from './CheckOutMain.styled'
import Seat from './Seat'
import { useNavigate } from 'react-router-dom'

export default function CheckOutMain(props) {

    const seat = props.seat
    const handleSelectTicket = props.onSelectTicket
    const navigate = useNavigate()
    const taiKhoanNguoiDung = props.taiKhoanNguoiDung

    return (
        <CheckOutMainStyled>
            <CheckOutHeader>
                <HeaderContainer>
                    <Logo
                        onClick={() => navigate('/')}
                    >
                        <LogoImg src='/img/header/logo.png' alt='logo-img' />
                    </Logo>
                    <User>
                        <UserImg>
                            <UserImgItem src='/img/header/avatar.png' alt='user-img' />
                        </UserImg>
                        <UserName>{taiKhoanNguoiDung}</UserName>
                    </User>

                </HeaderContainer>
            </CheckOutHeader>

            <CheckOutMainContent>
                <CheckOutInfo>
                    <MovieImg>
                        <MovieImgItem src='/img/header/avatar.png' alt='user-img' />
                    </MovieImg>
                    <CheckOutAdress>
                        <CheckOutAdressItem color='#44c020' fontSize='16px'>BHD Star - 3/2 - Rạp 1</CheckOutAdressItem>
                        <CheckOutAdressItem color='#9b9b9b' fontSize='14px'>L5-Vincom 3/2, 3C Đường 3/2, Q.10</CheckOutAdressItem>
                    </CheckOutAdress>
                </CheckOutInfo>

                <Screen>
                    <ScreenImg>
                        <ScreenImgItem src='/img/screen/screen.png' alt='screen-img' />
                    </ScreenImg>
                </Screen>
                <SeatMap>
                    <SeatMapRow>
                        <SeatMapRowItem>A</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(0, 16).map((item) => {
                            return (
                                <SeatMapRowItem key={item.maGhe}>
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>

                    <SeatMapRow>
                        <SeatMapRowItem>B</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(16, 32).map((item) => {
                            return (
                                <SeatMapRowItem key={item.maGhe}>
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>

                    <SeatMapRow>
                        <SeatMapRowItem>C</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(32, 48).map((item) => {
                            return (
                                <SeatMapRowItem key={item.maGhe}>
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>


                    <SeatMapRow>
                        <SeatMapRowItem>D</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(48, 64).map((item) => {
                            return (
                                <SeatMapRowItem key={item.maGhe}>
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>




                    <SeatMapRow>
                        <SeatMapRowItem>E</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(64, 80).map((item) => {
                            return (
                                <SeatMapRowItem key={item.maGhe}>
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>




                    <SeatMapRow>
                        <SeatMapRowItem>F</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(80, 96).map((item) => {
                            return (
                                <SeatMapRowItem key={item.maGhe}>
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>



                    <SeatMapRow>
                        <SeatMapRowItem>G</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(96, 112).map((item) => {
                            return (
                                <SeatMapRowItem key={item.maGhe}>
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>



                    <SeatMapRow>
                        <SeatMapRowItem>H</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(112, 128).map((item) => {
                            return (
                                <SeatMapRowItem key={item.maGhe}>
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>



                    <SeatMapRow>
                        <SeatMapRowItem>I</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(128, 144).map((item) => {
                            return (
                                <SeatMapRowItem key={item.maGhe}>
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>



                    <SeatMapRow>
                        <SeatMapRowItem>J</SeatMapRowItem>
                        {seat?.danhSachGhe?.slice(144, 160).map((item) => {
                            return (
                                <SeatMapRowItem
                                    key={item.maGhe}

                                >
                                    <Seat seat={item}
                                        onSelectTicket={(ticket) => handleSelectTicket(ticket)}
                                    />
                                </SeatMapRowItem>
                            )
                        })}
                    </SeatMapRow>


                </SeatMap>
                <SeatInfo>
                    <SeatInfoContainer>
                        <SeatInfoItem>
                            <SeatInfoImg color='#3e515d'></SeatInfoImg>
                            <SeatInfoText>Ghế thường</SeatInfoText>
                        </SeatInfoItem>

                        <SeatInfoItem>
                            <SeatInfoImg color='#f7b500'></SeatInfoImg>
                            <SeatInfoText>Ghế vip</SeatInfoText>
                        </SeatInfoItem>

                        <SeatInfoItem>
                            <SeatInfoImg color='#39f107'></SeatInfoImg>
                            <SeatInfoText>Ghế đang chọn</SeatInfoText>
                        </SeatInfoItem>

                        <SeatInfoItem>
                            <SeatInfoImg color='#CCCCCC'></SeatInfoImg>
                            <SeatInfoText>Ghế đã có người đặt</SeatInfoText>
                        </SeatInfoItem>

                    </SeatInfoContainer>
                </SeatInfo>

            </CheckOutMainContent>

        </CheckOutMainStyled>
    )
}
