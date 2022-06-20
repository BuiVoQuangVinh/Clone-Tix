import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getMovieList } from '../../actions/MovieList'
import { getTheaterList } from '../../actions/TheaterList'
import Carousle from './Carousel';
import ShowTimes from './ShowTimes';
import TheaterList from './TheaterList'
import Ads from './Ads'
import News from './News';
import Wrap from './Wrap'

import LoadingPage from '../LoadingPage'


export default function HomePage() {

  const { movieList, loadingMovieList } = useSelector((state) => state.movieListReducer)
  const { theaterList, loadingTheaterList } = useSelector((state) => state.theaterListReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList())
    dispatch(getTheaterList())
  }, [])

  return (
    <>
      {(loadingMovieList || loadingTheaterList) ?

        <LoadingPage />
        :
        <>
          <Carousle />
          <ShowTimes movieList={movieList} />
          <Wrap />
          <TheaterList theaterList={theaterList} />
          <Wrap />
          <News />
          <Wrap />
          <Ads />
        </>
      }

    </>
  )
}
