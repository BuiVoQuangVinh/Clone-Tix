import styled from 'styled-components'

export const SeatStyled = styled.button`
    color:white ;
    font-size:14px ;
    font-weight:600 ;
    width:36px ;
    height:36px ;
    background-color:${props => props.bg} ;
    border:none ;
    outline:none ;
    border-radius:4px ;
    cursor: ${props => props.bought ?'not-allowed' :'pointer'};

`