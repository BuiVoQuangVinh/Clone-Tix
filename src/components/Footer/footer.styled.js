import styled from 'styled-components'


export const FooterStyled = styled.div`
    color:#949494 ;
    background-color: #222222;
    padding: 20px 0;
`

export const FooterStyledContainer = styled.div`
    max-width:50% ;
    margin:0 auto ;
`

export const FooterTop = styled.div`
    display:flex ;
`

export const FooterTix = styled.div`
    flex:2;
    padding:0 10px ;
`
export const FooterPartner = styled.div`
    flex:2;
    padding:0 10px ;
`

export const FooterMobieApp = styled.div`
    flex:1;
    padding:0 10px ;

`

export const FooterSocical = styled.div`
    flex:1;
    padding:0 10px ;

`

export const FooterTopTitle = styled.p`
    color:#ffffff;
    margin-bottom:12px ;
`

export const FooterTixSub = styled.div`
   width:50% ;
   flex:1 ;
`
export const FooterTixItem = styled.a`
    display:block ;
    color: #949494;
    text-decoration:none ;
    font-size: 12px;
    padding: 10px;
    height: 27px;
    text-decoration: none;
    transition: all 300ms;
    &:hover{
        color:#ffffff ;
    }
`

export const FooterPartnerItem = styled.div`
    margin-bottom:12px ;
    width:20% ;
`
export const FooterPartnerImg = styled.img`
    cursor: pointer;
    object-fit:cover ;
    width:40px ;
    height:40px ;
    border-radius:50% ;
    transition:all 0.2s ;
    &:hover{
        opacity:0.7 ;
    }
`

export const FooterAppSocial = styled.div`
    width:30px ;
    height:30px ;
    margin-right:16px ;
`

export const FooterAppSocialImg = styled.img`
    width:100% ;
    cursor: pointer;
    transition:all 0.2s;
    &:hover{
        opacity:0.7 ;
    }
`

export const FooterBottom = styled.div`
`

export const RowStyled = styled.div`
    display:flex ;
    flex-wrap:wrap ;
    margin-top:${props => props.marginBottom ? props.marginBottom : "0px"} ;
`
export const BreakLine = styled.div`
    width:100% ;
`

