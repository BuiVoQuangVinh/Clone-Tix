import React from 'react'
import {
  FooterStyled,
  FooterStyledContainer,
  FooterTop,
  FooterTopTitle,
  FooterTix,
  FooterTixSub,
  FooterTixItem,
  FooterPartner,
  FooterPartnerItem,
  FooterPartnerImg,
  FooterMobieApp,
  FooterSocical,
  FooterAppSocial,
  FooterAppSocialImg,
  RowStyled,
} from './footer.styled'

export default function Footer() {
  const partner = [
    {
      id: "cgv",
      img: "/img/footer/cgv.png",
    },
    {
      id: "bhd",
      img: "/img/footer/bhd.png",
    },
    {
      id: "galaxy",
      img: "/img/footer/galaxy.png",
    },
    {
      id: "lottecinema",
      img: "/img/footer/lottecinema.png",
    },
    {
      id: "cinestar",
      img: "/img/footer/cinestar.png",
    },
    {
      id: "megags",
      img: "/img/footer/megags.png",
    },
    {
      id: "beta",
      img: "/img/footer/beta.jpg",
    },
    {
      id: "ddc",
      img: "/img/footer/ddc.png",
    },
    {
      id: "touch",
      img: "/img/footer/touch.png",
    },

    {
      id: "cinemax",
      img: "/img/footer/cinemax.jpg",
    },
    {
      id: "starlight",
      img: "/img/footer/starlight.png",
    },
    {
      id: "dcine",
      img: "/img/footer/dcine.png",
    },
    {
      id: "zalopay",
      img: "/img/footer/zalopay.png",
    },
    {
      id: "payoo",
      img: "/img/footer/payoo.jpg",
    },
    {
      id: "VCB",
      img: "/img/footer/VCB.png",
    },
    {
      id: "AGRI",
      img: "/img/footer/agri.png",
    },
    {
      id: "viettin",
      img: "/img/footer/viettin.png",
    },
    {
      id: "ivb",
      img: "/img/footer/ivb.png",
    },
    {
      id: "123go",
      img: "/img/footer/123go.png",
    },
    {
      id: "safari",
      img: "/img/footer/safari.png",
    },


  ]

  return (
    <FooterStyled>
      <FooterStyledContainer>
        <FooterTop>

          <FooterTix>
            <FooterTopTitle>Tix</FooterTopTitle>

            <RowStyled>
              <FooterTixSub width="50%" flex="50%">
                <FooterTixItem href='#'>FAQ</FooterTixItem>
                <FooterTixItem href='#'>Brand Guidelines</FooterTixItem>

              </FooterTixSub>
              <FooterTixSub width="50%" flex="50%">
                <FooterTixItem href='#'>Thỏa thuận sử dụng</FooterTixItem>
                <FooterTixItem href='#'>Chính sách bảo mật</FooterTixItem>

              </FooterTixSub>
            </RowStyled>

          </FooterTix>

          <FooterPartner>
            <FooterTopTitle>Đối tác</FooterTopTitle>
            <RowStyled marginBottom="15px">
              {partner.map((item) => {
                return (
                  <FooterPartnerItem key={item.id}>
                    <FooterPartnerImg src={item.img} alt='partner-img' />
                  </FooterPartnerItem>
                )
              })}
            </RowStyled>


          </FooterPartner>
          <FooterMobieApp>
            <FooterTopTitle>MOBIE APP</FooterTopTitle>
            <RowStyled>
              <FooterAppSocial>
                <FooterAppSocialImg src="/img/footer/android.png" alt='mobie-icon' />
              </FooterAppSocial>

              <FooterAppSocial>
                <FooterAppSocialImg src="/img/footer/apple.png" alt='mobie-icon' />
              </FooterAppSocial>

            </RowStyled>
          </FooterMobieApp>
          <FooterSocical>
            <FooterTopTitle>SOCIAL </FooterTopTitle>
            <RowStyled>
              <FooterAppSocial>
                <FooterAppSocialImg src="/img/footer/facebook.png" alt='facebook-icon' />
              </FooterAppSocial>

              <FooterAppSocial>
                <FooterAppSocialImg src="/img/footer/zalo.png" alt='zalo-icon' />
              </FooterAppSocial>

            </RowStyled>

          </FooterSocical>
        </FooterTop>
      </FooterStyledContainer>


    </FooterStyled>
  )
}
