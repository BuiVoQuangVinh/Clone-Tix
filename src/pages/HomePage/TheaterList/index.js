import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



// import css
import {
  TheaterlistStyled,
  TheaterlistContainer,
  TheaterlistLogo,
  TheaterlistLogoDetail,
  TheaterlistLogoImg,
  TheaterlistDetail,
  TheaterlistInfo,
  TheaterlistInfoImgContainer,
  TheaterlistInfoImg,
  TheaterlistInfoWrapeInfo,
  TheaterlistInfoName,
  TheaterlistInfoLocal,
  TheaterlistMovies,
  TheaterMovie,
  TheaterMovieContainer,
  TheaterMovieInfo,
  TheaterMovieImg,
  TheaterMovieWrapInfo,
  TheaterMovieName,
  TheaterMovieDescription,
  TheaterMovieShowTimes,
  TheaterMovieFormat,
  TheaterMovieShowTimesContainer,
  TheaterMovieShowTimesButton,
  TheaterMovieShowTimesButtonSpan,
} from './TheaterList.Styled'


export default function Theaterlist(props) {


  const theaterList = props.theaterList

  const navigate = useNavigate()

  const [activeTheaterCluster, setActiveTheaterCluster] = useState(0)
  const [activeTheater, setActiveTheater] = useState(0)

  const handleChange = (index) => {
    setActiveTheater(0)
    setActiveTheaterCluster(index)
  }

  const formatHourMinus = (times) => {
    const hours = times.slice(11, 13)
    const mins = times.slice(14, 16)
    return { hours: hours, mins: mins }
  }

  if (!theaterList) {
    return <></>
  }

  return (
    <TheaterlistStyled>
      <TheaterlistContainer>
        <TheaterlistLogo>
          {theaterList?.map((item, index) => {
            return (
              <TheaterlistLogoDetail
                key={item.maHeThongRap}
                // so sanh voi active xem cum rap co dang duoc chon hay khong?
                active={activeTheaterCluster === index ? "active" : ""}
                // thay doi chon cum rap luu index vao active
                onClick={() => handleChange(index)}>
                <TheaterlistLogoImg src={item.logo} alt='logo_img' />
              </TheaterlistLogoDetail>
            )
          })}
        </TheaterlistLogo>
        <TheaterlistDetail>
          {theaterList[activeTheaterCluster]?.lstCumRap?.map((theater, index) => {
            return (
              <TheaterlistInfo
                key={theater.maCumRap}
                // so sanh voi active xem  rap co dang duoc chon hay khong?
                active={activeTheater === index ? "active" : ""}
                // thay doi chon  rap luu index vao active
                onClick={() => setActiveTheater(index)}>
                <TheaterlistInfoImgContainer>
                  <TheaterlistInfoImg src="./img/theater/rap.jpg" alt="theater_img" />
                  <TheaterlistInfoWrapeInfo>
                    <TheaterlistInfoName>{theater.tenCumRap}</TheaterlistInfoName>
                    <TheaterlistInfoLocal>{theater.diaChi}</TheaterlistInfoLocal>
                  </TheaterlistInfoWrapeInfo>
                </TheaterlistInfoImgContainer>

              </TheaterlistInfo>
            )
          })

          }
        </TheaterlistDetail>
        <TheaterlistMovies>

          <TheaterMovie >

            {theaterList[activeTheaterCluster]?.lstCumRap[activeTheater]?.danhSachPhim?.map((movie) => {
              return (
                <TheaterMovieContainer key={movie?.maPhim}>
                  <TheaterMovieInfo>
                    <TheaterMovieImg src={movie.hinhAnh} alt="movie-img" />
                    <TheaterMovieWrapInfo>
                      <TheaterMovieName>{movie.tenPhim}</TheaterMovieName>
                      <TheaterMovieDescription>116 phút - TIX 8.6 - IMDb 0</TheaterMovieDescription>
                    </TheaterMovieWrapInfo>
                  </TheaterMovieInfo>
                  <TheaterMovieShowTimes>
                    <TheaterMovieFormat>2D Digital</TheaterMovieFormat>
                    <TheaterMovieShowTimesContainer>
                      {movie.lstLichChieuTheoPhim?.map((time) => {
                        // format gio va phut
                        const { hours, mins } = formatHourMinus(time.ngayChieuGioChieu)
                        return (
                          <TheaterMovieShowTimesButton
                            key={time.maLichChieu}
                            onClick={ ()=>navigate(`/booking/${time.maLichChieu}`) }
                          >
                            {hours}:{mins}
                            <TheaterMovieShowTimesButtonSpan>
                              ~ {parseInt(hours) + 2}:{mins}
                            </TheaterMovieShowTimesButtonSpan>
                          </TheaterMovieShowTimesButton>
                        )
                      })}
                    </TheaterMovieShowTimesContainer>
                  </TheaterMovieShowTimes>
                </TheaterMovieContainer>
              )
            })}
          </TheaterMovie>

        </TheaterlistMovies>
      </TheaterlistContainer>
    </TheaterlistStyled>
  )
}
