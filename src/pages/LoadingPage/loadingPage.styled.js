import styled,{keyframes} from 'styled-components'

export const LoadingPageStyled = styled.div`
    position:relative;
    width:100vw ;
    height:100vh ;
`


const dotsLoader = keyframes`
    0% {
    box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }
  8.33% {
    box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }
  16.67% {
    box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }
  25% {
    box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }
  33.33% {
    box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
  }
  41.67% {
    box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }
  50% {
    box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }
  58.33% {
    box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }
  66.67% {
    box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px, #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }
  75% {
    box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }
  83.33% {
    box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
  }
  91.67% {
    box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }
  100% {
    box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }
`


export const DotLoading = styled.div`
    opacity: 1;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -4px;
    margin-top: -4px;
    text-indent: -9999px;
    display: inline-block;
    width: 8px;
    height: 8px;
    background: transparent;
    border-radius: 100%;
    box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px, #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
    animation: ${dotsLoader} 5s infinite ease-in-out;
    transform-origin: 50% 50%;
    transform: scale(1);
    transition: .3s all;
`