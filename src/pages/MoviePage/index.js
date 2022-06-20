import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

// import movieInfo from '../../Api/MovieInfo.json'

import { getMovieInfo } from '../../actions/MovieInfo'

// import Popup from '../../components/PopUp'

import {
  MoviePageStyled,
  MovieCarousel,
  Blur,
  MovieCarouselContainer,
  MovieImg,
  MovieImgItem,
  MovieInfo,
  MovieInfoContainer,
  MovieInfoButton,
  MovieInfoItem,
  MovieInfoAge,
  MovieShowTime,
  MovieVote,
  MovieVoteContainer,
  MovieVoteCircle,
  CircleVote,
  CircleBorderVoteNum,
  MovieShowTimeNav,
  MovieShowTimeNavItem,
  TabContent,
  Theaters,
  Theater,
  Logo,
  LogoItem,
  TheaterId,
  TheaterShowTime,
  TheaterName,
  TheaterNameItem,
  ThearTimeShow,
  ThearTimeShowItem,
  InfomationContainer,
  RowInfo,
  TitlteInfo,
  ContentInfo,
  MovieContentTitle,
  MovieContentParagraph,
} from './MoviePage.styled'

export default function MoviePage() {

  const param = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovieInfo(param.id))
  }, [dispatch,param.id])

  const { movie } = useSelector((state) => state.movieInfoReducer)

  const formatDay = (item) => {
    const year = item?.slice(0, 4)
    const month = item?.slice(5, 7)
    const day = item?.slice(8, 10)

    return day + '/' + month + '/' + year
  }

  const formatTime = (item) => {
    return item?.slice(11, 16)
  }

  const [activeNav, setActiveNav] = useState(0);
  const [activeTheater, setActiveTheater] = useState(0);

  console.log(movie)

  return (
    <MoviePageStyled>
      <MovieCarousel backGround={movie?.hinhAnh}>
        <Blur />
        <MovieCarouselContainer>
          <MovieImg>
            <MovieImgItem src={movie?.hinhAnh} alt='movieImg' />
          </MovieImg>
          <MovieInfo>
            <MovieInfoContainer>
              <MovieInfoItem fontsize='16px' fontWeight='400'>{formatDay(movie?.ngayKhoiChieu)}</MovieInfoItem>
              <MovieInfoItem fontsize='20px' fontWeight='600' >
                <MovieInfoAge >C13</MovieInfoAge>
                {movie?.tenPhim}
              </MovieInfoItem>
              <MovieInfoItem fontsize='16px' fontWeight='400'>2D/Digital</MovieInfoItem>

              <MovieInfoButton

                marginRight='12px'

                backgroundColor='#DC3545'>Mua Vé</MovieInfoButton>
              <MovieInfoButton
                marginRight='0'
                backgroundColor='#198754'

                href={movie?.trailer}
              >

                Xem Trailer</MovieInfoButton>

            </MovieInfoContainer>
          </MovieInfo>
          <MovieVote>
            <MovieVoteContainer>
              <MovieVoteCircle>

                <CircleVote>10</CircleVote>

              </MovieVoteCircle>

              <CircleBorderVoteNum>72 người đã đánh giá</CircleBorderVoteNum>
            </MovieVoteContainer>
          </MovieVote>

        </MovieCarouselContainer>
      </MovieCarousel>
      <MovieShowTime>
        <MovieShowTimeNav>

          <MovieShowTimeNavItem
            active={activeNav === 0 ? "true" : ""}
            onClick={() => setActiveNav(0)}

          >Lịch chiếu
          </MovieShowTimeNavItem>

          <MovieShowTimeNavItem
            active={activeNav === 1 ? "true" : ""}
            onClick={() => setActiveNav(1)}
          >Thông tin</MovieShowTimeNavItem>

        </MovieShowTimeNav>

        <TabContent active={activeNav === 0 ? "block" : ""}>
          <Theaters>
            {movie?.heThongRapChieu.map((theater, index) => {
              return (
                <Theater
                  key={theater.maHeThongRap}
                  action={index === activeTheater ? "true" : ""}
                  onClick={() => setActiveTheater(index)}
                >
                  <Logo>
                    <LogoItem src={theater?.logo} alt='TheaterLogo' />
                  </Logo>
                  <TheaterId>{theater?.tenHeThongRap}</TheaterId>
                </Theater>
              )
            })}
          </Theaters>

          <TheaterShowTime>
            {movie?.heThongRapChieu[activeTheater]?.cumRapChieu.map((theater) => {
              return (
                <TheaterName
                  key={theater?.maCumRap}

                >
                  <TheaterNameItem>
                    {theater.tenCumRap}
                  </TheaterNameItem>
                  {theater.lichChieuPhim.map((time) => {
                    return (
                      <ThearTimeShow
                        to={`/booking/${time.maLichChieu}`}
                        key={time.maLichChieu}
                      >
                        <ThearTimeShowItem>
                          Ngày chiếu: {formatDay(time?.ngayChieuGioChieu)}
                        </ThearTimeShowItem>
                        <br />
                        <ThearTimeShowItem>
                          Giờ chiếu: {formatTime(time?.ngayChieuGioChieu)}
                        </ThearTimeShowItem>
                      </ThearTimeShow>
                    )
                  })}
                </TheaterName>
              )
            })}


          </TheaterShowTime>
        </TabContent>

        <TabContent active={activeNav === 1 ? "block" : ""}>
          <InfomationContainer>
            <RowInfo>
              <TitlteInfo>Ngày công chiếu</TitlteInfo>
              <ContentInfo>{formatDay(movie?.ngayKhoiChieu)}</ContentInfo>
            </RowInfo>

            <RowInfo>
              <TitlteInfo>Đạo diễn</TitlteInfo>
              <ContentInfo></ContentInfo>
            </RowInfo>


            <RowInfo>
              <TitlteInfo>Diễn viên</TitlteInfo>
              <ContentInfo></ContentInfo>
            </RowInfo>



            <RowInfo>
              <TitlteInfo>Thể loại</TitlteInfo>
              <ContentInfo>Hài hước</ContentInfo>
            </RowInfo>

            <RowInfo>
              <TitlteInfo>Định dạng</TitlteInfo>
              <ContentInfo>2D/Digital</ContentInfo>
            </RowInfo>


            <RowInfo>
              <TitlteInfo>Ngôn ngữ</TitlteInfo>
              <ContentInfo>Tiếng Anh</ContentInfo>
            </RowInfo>


          </InfomationContainer>
          <InfomationContainer>
            <MovieContentTitle>Nội dung</MovieContentTitle>
            <MovieContentParagraph>
              {movie?.moTa}
            </MovieContentParagraph>
          </InfomationContainer>

        </TabContent>

      </MovieShowTime>

    </MoviePageStyled>
  )
}
