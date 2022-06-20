import React from 'react'


// import css
import {
    MovieThumbnailStyled,
    MovieThumbnailImg,
    MovieThumbnailImgItem,
    HiddenButton,
    HiddenButtonImg,
    MovieThumbnailDecription,
    MovieThumbnailMovieName,
    MovieThumbnailBuy,
} from './MovieThumbnail.styled'


export default function MovieThumbnail(props) {
    const movie = props.movie
    return (
        <MovieThumbnailStyled>
            <MovieThumbnailImg >
                <MovieThumbnailImgItem src={movie.hinhAnh} alt='movie_img' />
                <HiddenButton>
                    <HiddenButtonImg src="./img/movieThumbnail/play.png" alt='hidden_play_button' />
                </HiddenButton>
            </MovieThumbnailImg>
            <MovieThumbnailDecription>
                <MovieThumbnailMovieName>
                    {movie.tenPhim}
                </MovieThumbnailMovieName>
                <MovieThumbnailBuy to={'/movie/' + movie?.maPhim}>
                    Mua Vé
                </MovieThumbnailBuy>

            </MovieThumbnailDecription>

        </MovieThumbnailStyled>

    )
}
