import React, { useState } from 'react'


// import css
import {
    ShowTimesStyled,
    SliderStyled,
    Next,
    Prev,
    ShowTimesContainer,
    ShowTimesNav,
    ShowTimesLi,

} from './ShowTimes.styled'

// css of react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import MovieThumbnail from './MovieThumbnail'



export default function ShowTimes(props) {

    // const {movieList, loading, error} = useSelector( (state)=>state.movieListReducer )
    // const {movieList} = useSelector( (state)=>state.movieListReducer )

    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getMovieList())
    // }, [])

    const movieList = props.movieList

    // Hien thi dang chieu hay sap chieu
    const [active, setActive] = useState(0)

    // const listMovie = showTimes

    // custom PrevArrow
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <Prev
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            Previous
        </Prev>
    );

    // custom NextArrow
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <Next
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            Next
        </Next>
    );

    // setting react-slick
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
    };
    return (
        <ShowTimesStyled>
            <ShowTimesContainer>
                <ShowTimesNav>
                    <ShowTimesLi active={active === 0 ? 'active' : ''}
                        onClick={() => setActive(0)}
                    >Đang chiếu</ShowTimesLi>
                    <ShowTimesLi active={active === 1 ? 'active' : ''}
                        onClick={() => setActive(1)}
                    >Sắp chiếu</ShowTimesLi>
                </ShowTimesNav>

                {active === 0 ?
                    <SliderStyled {...settings}>

                        {movieList?.map((movie) => {
                            return (
                                <MovieThumbnail movie={movie} key={movie?.maPhim} />
                            )
                        })}

                    </SliderStyled>
                    :
                    <SliderStyled {...settings}>
                        {movieList?.map((movie) => {
                            return (
                                <MovieThumbnail movie={movie} key={movie?.maPhim} />
                            )
                        })}

                    </SliderStyled>
                }


                {/* <ShowTimesContent active={active === 1 ? 'active' : ''} >


                </ShowTimesContent> */}
            </ShowTimesContainer>
        </ShowTimesStyled>
    )

}
