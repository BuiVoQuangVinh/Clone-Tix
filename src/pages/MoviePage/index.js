import React, { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

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
  NoHaveTicket,
  NoHaveTicketButton,
  NoHaveTicketText,
} from './MoviePage.styled'

export default function MoviePage() {

  const param = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovieInfo(param.id))
  }, [dispatch, param.id])

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
  const navigate=  useNavigate()
  const [activeNav, setActiveNav] = useState(0);
  const [activeTheater, setActiveTheater] = useState(0);


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

                backgroundColor='#DC3545'>Mua V??</MovieInfoButton>
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

              <CircleBorderVoteNum>72 ng?????i ???? ????nh gi??</CircleBorderVoteNum>
            </MovieVoteContainer>
          </MovieVote>

        </MovieCarouselContainer>
      </MovieCarousel>
      <MovieShowTime>
        <MovieShowTimeNav>
          <MovieShowTimeNavItem
            active={activeNav === 0 ? "true" : ""}
            onClick={() => setActiveNav(0)}

          >L???ch chi???u
          </MovieShowTimeNavItem>

          <MovieShowTimeNavItem
            active={activeNav === 1 ? "true" : ""}
            onClick={() => setActiveNav(1)}
          >Th??ng tin</MovieShowTimeNavItem>

        </MovieShowTimeNav>

        <TabContent active={activeNav === 0 ? "block" : ""}>

          {movie?.heThongRapChieu.length ?
            <>
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
                              Ng??y chi???u: {formatDay(time?.ngayChieuGioChieu)}
                            </ThearTimeShowItem>
                            <br />
                            <ThearTimeShowItem>
                              Gi??? chi???u: {formatTime(time?.ngayChieuGioChieu)}
                            </ThearTimeShowItem>
                          </ThearTimeShow>
                        )
                      })}
                    </TheaterName>
                  )
                })}


              </TheaterShowTime>
            </>
            :
            <NoHaveTicket>
              <NoHaveTicketText>
                Phim hi???n t???i ch??a c?? l???ch chi???u!
              </NoHaveTicketText>
              <NoHaveTicketButton
                 
                onClick={()=>navigate('/')}
              >
                Ch???n phim kh??c
              </NoHaveTicketButton>
            </NoHaveTicket>}

        </TabContent>

        <TabContent active={activeNav === 1 ? "block" : ""}>
          <InfomationContainer>
            <RowInfo>
              <TitlteInfo>Ng??y c??ng chi???u</TitlteInfo>
              <ContentInfo>{formatDay(movie?.ngayKhoiChieu)}</ContentInfo>
            </RowInfo>

            <RowInfo>
              <TitlteInfo>?????o di???n</TitlteInfo>
              <ContentInfo></ContentInfo>
            </RowInfo>


            <RowInfo>
              <TitlteInfo>Di???n vi??n</TitlteInfo>
              <ContentInfo></ContentInfo>
            </RowInfo>



            <RowInfo>
              <TitlteInfo>Th??? lo???i</TitlteInfo>
              <ContentInfo>H??i h?????c</ContentInfo>
            </RowInfo>

            <RowInfo>
              <TitlteInfo>?????nh d???ng</TitlteInfo>
              <ContentInfo>2D/Digital</ContentInfo>
            </RowInfo>


            <RowInfo>
              <TitlteInfo>Ng??n ng???</TitlteInfo>
              <ContentInfo>Ti???ng Anh</ContentInfo>
            </RowInfo>


          </InfomationContainer>
          <InfomationContainer>
            <MovieContentTitle>N???i dung</MovieContentTitle>
            <MovieContentParagraph>
              {movie?.moTa}
            </MovieContentParagraph>
          </InfomationContainer>

        </TabContent>

      </MovieShowTime>

    </MoviePageStyled>
  )
}
