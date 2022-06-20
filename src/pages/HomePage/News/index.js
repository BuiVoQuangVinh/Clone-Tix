import React, { useState } from 'react'
import {
  NewsStyled,
  NewsContainer,
  NewsUl,
  NewsLi,
  NewsContent,
  NewsContentTop,
  NewsItem,
  NewsImgContainer,
  NewsItemImg,
  NewsItemInfo,
  NewsItemTitle,
  NewsItemDiscription,
  NewsInteract,
  NewsInteractSpan,
  NewsInteractItem,
  NewsInteractNumber,
  NewsContentBottom,
  NewsItemSub,
  NewsItemSubImg,
  NewsItemSubInfo,
} from './news.styled'

export default function News() {

  const [active, setActive] = useState("dienanh")

  return (
    <NewsStyled>
      <NewsContainer>
        <NewsUl>
          <NewsLi
            color={active === "dienanh" ? "#fa5238" : "#000000"}
            transform={active === "dienanh" ? "1" : "0.83333"}
            onClick={() => setActive("dienanh")}
          >Điện ảnh 24h</NewsLi>
          <NewsLi
            color={active === "review" ? "#fa5238" : "#000000"}
            transform={active === "review" ? "1" : "0.83333"}
            onClick={() => setActive("review")}
          >Review</NewsLi>
          <NewsLi
            color={active === "khuyenmai" ? "#fa5238" : "#000000"}
            transform={active === "khuyenmai" ? "1" : "0.83333"}
            onClick={() => setActive("khuyenmai")}
          >Khuyến mãi</NewsLi>
        </NewsUl>

        {/*display of DienAnh24 */}
        <NewsContent display={active === "dienanh" ? "block" : "none"}>
          <NewsContentTop>
            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/da1.jpg' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  Cigarettes After Sex chợt thoáng xuất hiện trong trailer phim tâm lý Promising Young Woman
                </NewsItemTitle>
                <NewsItemDiscription>
                  Toxic của Britney Spears cũng vang lên luôn đấy.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>33</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>5</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>
            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/da2.jpg' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  Điểm mặt những phim Việt công phá phòng chiếu trong năm 2020
                </NewsItemTitle>
                <NewsItemDiscription>
                  Nửa cuối năm là thời gian thị trường phim Việt sẽ dậy sóng với sự trở lại của những tên tuổi gạo cội trong làng điện ảnh. Cùng điểm sơ qua những gưởng mặt sáng giá này nhé!
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>33</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>5</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>
          </NewsContentTop>

          <NewsContentBottom>
            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/da3.png' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  ‘Bà đồng’ Lin Shaye của Insidious tái xuất trong phim kinh dị ‘Bẫy Linh Hồn’     </NewsItemTitle>
                <NewsItemDiscription>
                  Nữ hoàng phim kinh dị Lin Shaye tiếp tục thể hiện khả năng diễn xuất thần với hình ảnh điên loạn trong “DreamKatcher” – phim kinh dị rùng rợn đánh dấu sự trở lại của các rạp chiếu phim sau thời gian giãn cách xã hội.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>33</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>5</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>

            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/da4.png' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  Batman vs. Joker: Ai tốt ai xấu?
                </NewsItemTitle>
                <NewsItemDiscription>
                  Người ta nói Batman có một giàn phản diện hay nhất trong giới truyện tranh cũng như điện ảnh, nhưng mình biết chắc chắn khi nghe câu đó người ta chỉ nghĩ đến một người, The Joker - Hoàng tử hề của giới tội phạm.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>33</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>5</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>

            <NewsItem>
              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub1.png' alt='news-img' />
                <NewsItemSubInfo>
                  ‘Tôi sẽ làm tất cả ngỡ ngàng bởi phiên bản tà ác của mình’ - Song Ji Hyo
                </NewsItemSubInfo>
              </NewsItemSub>

              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub2.png' alt='news-img' />
                <NewsItemSubInfo>
                  Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!
                </NewsItemSubInfo>
              </NewsItemSub>


              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub3.png' alt='news-img' />
                <NewsItemSubInfo>
                  Diễn viên đặc biệt của Bằng Chứng Vô Hình
                </NewsItemSubInfo>
              </NewsItemSub>

              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub4.png' alt='news-img' />
                <NewsItemSubInfo>
                  Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                </NewsItemSubInfo>
              </NewsItemSub>
            </NewsItem>

          </NewsContentBottom>
        </NewsContent>


        {/* display of Review */}
        <NewsContent display={active === "review" ? "block" : "none"}>
          <NewsContentTop>
            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/review1.jpg' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  Ford v Ferrari - Tuyệt tác về lịch sử của môn thể thao tốc độ
                </NewsItemTitle>
                <NewsItemDiscription>
                  Trái với quan niệm phim tiểu sử thể thao thường khô khan, Ford v Ferrari đã mang đến một câu chuyện hấp dẫn về lịch sử của ngành công nghiệp ô tô và những đường đua kịch tính.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>93</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>15</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>
            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/review2.jpg' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  Trò Chơi Kỳ Ảo: Thăng Cấp - The Rock và đồng bọn tiếp tục 'phá đảo thế giới ảo'
                </NewsItemTitle>
                <NewsItemDiscription>
                  Với sự xuất hiện của “hội phụ lão”, Jumanji: The Next Level trở nên hài hước và lầy lội hơn hẳn phần đầu tiên.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>35</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>12</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>
          </NewsContentTop>

          <NewsContentBottom>
            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/review3.jpg' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  Chị Chị Em Em - Bản Remix cực 'gắt' của dối lừa - phản bội - tình dục
                </NewsItemTitle>
                <NewsItemDiscription>
                  Một câu chuyện lạ lẫm mà điện ảnh Việt Nam chưa từng có.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>77</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>27</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>

            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/review4.jpg' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  [Review] Chị Chị Em Em - Tưởng phim tình cảm hóa ra 'hack não' muốn tung cả đầu
                </NewsItemTitle>
                <NewsItemDiscription>
                  Bộ phim đầu tay ở vai trò đạo diễn của Kathy Uyên mang đến hàng loạt nút thắt “ảo diệu” và cảm xúc dâng trào.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>63</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>15</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>

            <NewsItem>
              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub5.jpg' alt='news-img' />
                <NewsItemSubInfo>
                  [Review] Đôi Mắt Âm Dương - Món lạ đầu năm vừa hài vừa sợ của điện ảnh Việt
                </NewsItemSubInfo>
              </NewsItemSub>

              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub6.jpg' alt='news-img' />
                <NewsItemSubInfo>
                  [Review] 30 Chưa Phải Tết - Phim vòng lặp thời gian thương hiệu Việt
                </NewsItemSubInfo>
              </NewsItemSub>


              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub7.jpg' alt='news-img' />
                <NewsItemSubInfo>
                  [Review] 30 Chưa Phải Tết - Phim vòng lặp thời gian thương hiệu Việt
                </NewsItemSubInfo>
              </NewsItemSub>

              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub8.jpg' alt='news-img' />
                <NewsItemSubInfo>
                  [Review] Bí Mật Của Gió - Câu chuyện “tình người duyên ma” đầy nước mắt
                </NewsItemSubInfo>
              </NewsItemSub>
            </NewsItem>

          </NewsContentBottom>
        </NewsContent>



        {/* display of KhuyenMai */}
        <NewsContent display={active === "khuyenmai" ? "block" : "none"}>
          <NewsContentTop>
            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/km1.png' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  CGV VÉ CHỈ 79.000Đ CẢ TUẦN!
                </NewsItemTitle>
                <NewsItemDiscription>
                  Tận hưởng Ưu Đãi lên đến 3 VÉ CGV mỗi tuần chỉ với GIÁ 79.000Đ/VÉ khi trên TĨ và thanh toán bằng ZaloPay.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>88</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>26</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>
            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/km2.png' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  BHD STẢ VÉ CHỈ 59.000Đ CẢ TUẦN!
                </NewsItemTitle>
                <NewsItemDiscription>
                  Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>45</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>25</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>
          </NewsContentTop>

          <NewsContentBottom>
            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/km3.png' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                </NewsItemTitle>
                <NewsItemDiscription>
                  Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX đây.
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>13</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>5</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>

            <NewsItem>
              <NewsImgContainer>
                <NewsItemImg src='./img/news/km4.jpg' alt='news-img' />
              </NewsImgContainer>
              <NewsItemInfo>
                <NewsItemTitle>
                  CỰC NÓNG!!! GIẢM 50% KHI MUA 2 VÉ
                </NewsItemTitle>
                <NewsItemDiscription>
                  ZaloPay mang đến ưu đãi khủng cho lần đầu thanh toán. Mở TIX đặt vé ngay thôi!
                </NewsItemDiscription>
                <NewsInteract>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/like.png' alt='like-icon' />
                    <NewsInteractNumber>103</NewsInteractNumber>
                  </NewsInteractSpan>
                  <NewsInteractSpan>
                    <NewsInteractItem src='./img/news/comment.png' alt='comment-icon' />
                    <NewsInteractNumber>23</NewsInteractNumber>
                  </NewsInteractSpan>
                </NewsInteract>
              </NewsItemInfo>
            </NewsItem>

            <NewsItem>
              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub5.jpg' alt='news-img' />
                <NewsItemSubInfo>
                  [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái
                </NewsItemSubInfo>
              </NewsItemSub>

              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub6.jpg' alt='news-img' />
                <NewsItemSubInfo>
                  [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay
                </NewsItemSubInfo>
              </NewsItemSub>


              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub7.jpg' alt='news-img' />
                <NewsItemSubInfo>
                  [Mega GS] Một đoá hoa thay ngàn lời yêu
                </NewsItemSubInfo>
              </NewsItemSub>

              <NewsItemSub>
                <NewsItemSubImg src='./img/news/sub8.jpg' alt='news-img' />
                <NewsItemSubInfo>
                  [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi
                </NewsItemSubInfo>
              </NewsItemSub>
            </NewsItem>

          </NewsContentBottom>
        </NewsContent>
      </NewsContainer>
    </NewsStyled>
  )
}
