import React from 'react';
import search3dImg from '/src/assets/common/search_3d.png';
import styled from 'styled-components';
//가데이터
const creators = [
  {
    profileImg: '/src/assets/creator/profileImg.jpg',
    no: 1, // 계정 고유 번호
    type: '인플루언서', // 유형
    cate: '인스타그램', // 유튜브, 인스타그램, 틱톡
    call: '+8201012345678',
    email: 'bba_na_na@naver.com',
    id: '@simihaze', // 계정 아이디
    creatorNo: 1, // 계정 소유자 고유번호
    fallower: 1234, // 팔로워 수
    like: 15293, // 팔로워 수
    comment: 1213, // 팔로워 수,
    imglist: [
      '/src/assets/creator/1.jpg',
      '/src/assets/creator/2.jpg',
      '/src/assets/creator/3.jpg',
      '/src/assets/creator/4.jpg',
      '/src/assets/creator/5.jpg',
    ],
    shotsList: [], // 숏폼 코드 리스트
  },
  {
    profileImg: '/src/assets/creator/profileImg.jpg',
    no: 1, // 계정 고유 번호
    type: '인플루언서', // 유형
    cate: '인스타그램', // 유튜브, 인스타그램, 틱톡
    call: '+8201012345678',
    email: 'bba_na_na@naver.com',
    id: '@simihaze', // 계정 아이디
    creatorNo: 1, // 계정 소유자 고유번호
    fallower: 1234, // 팔로워 수
    like: 15293, // 팔로워 수
    comment: 1213, // 팔로워 수,
    imglist: [
      '/src/assets/creator/1.jpg',
      '/src/assets/creator/2.jpg',
      '/src/assets/creator/3.jpg',
      '/src/assets/creator/4.jpg',
      '/src/assets/creator/5.jpg',
    ],
    shotsList: [], // 숏폼 코드 리스트
  },
  {
    profileImg: '/src/assets/creator/profileImg.jpg',
    no: 1, // 계정 고유 번호
    type: '인플루언서', // 유형
    cate: '인스타그램', // 유튜브, 인스타그램, 틱톡
    call: '+8201012345678',
    email: 'bba_na_na@naver.com',
    id: '@simihaze', // 계정 아이디
    creatorNo: 1, // 계정 소유자 고유번호
    fallower: 1234, // 팔로워 수
    like: 15293, // 팔로워 수
    comment: 1213, // 팔로워 수,
    imglist: [
      '/src/assets/creator/1.jpg',
      '/src/assets/creator/2.jpg',
      '/src/assets/creator/3.jpg',
      '/src/assets/creator/4.jpg',
      '/src/assets/creator/5.jpg',
    ],
    shotsList: [], // 숏폼 코드 리스트
  },
];
const getCateImg = (cate) => {
  if (cate === '인스타그램') {
    return '/src/assets/channel/instargram_icon.svg';
  } else if (cate === '유튜브') {
    return '/src/assets/channel/youtube_icon.svg';
  } else if (cate === '틱톡') {
    return '/src/assets/channel/tikkok_icon.svg';
  } else {
    return '/src/assets/channel/naver_icon.svg';
  }
};
const SearchResult = () => {
  return (
    <StyleDiv>
      <header>
        <p className="title">
          <img src={search3dImg} alt="검색 아이콘" />
          <span>검색 결과</span>
        </p>
        <p className="des">
          {creators.length}명의 크리에이터들이 활발히 활동하고 있어요!
        </p>
      </header>
      <div>
        {creators.map((creator, idx) => {
          let cateImg = getCateImg(creator.cate);
          return (
            <StyleButton key={idx}>
              <div className="header">
                <div className="wrapper">
                  <div className="Profilewrapper">
                    <img src={creator.profileImg} alt="프로필 이미지" />
                    <img src={cateImg} alt="유형" />
                  </div>
                  <div className="title2">
                    <span>{creator.type}</span>
                    <span>{creator.id}</span>
                  </div>
                  <div className="contect">
                    <span>{creator.call}</span>
                    <span>{creator.email}</span>
                  </div>
                </div>
                <div className="side">
                  <span>
                    평균 좋아요 <strong>{creator.like}</strong>
                  </span>
                  <span>
                    평균 댓글 <strong>{creator.comment}</strong>
                  </span>
                  <span>
                    팔로워 <strong>{creator.fallower}</strong>
                  </span>
                </div>
              </div>
              <div className="img-wrapper">
                {creator.imglist.map((img, index) => (
                  <img
                    className="img"
                    key={index}
                    src={img}
                    alt="크리에이터 게시물"
                  />
                ))}
              </div>
            </StyleButton>
          );
        })}
      </div>
    </StyleDiv>
  );
};
const StyleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 54px;

  & header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 54px;

    & p.title {
      margin-left: -60px;
      display: flex;
      align-items: center;
      justify-content: center;

      & span {
        font-size: 24px;
        font-weight: bold;
      }
    }

    & p.des {
      max-width: 350px;
      font-size: 16px;
      margin-top: 50px;
      padding: 16px;
      border-radius: 20px;
      background-color: white;
      box-shadow: 0 0 10px #f6c7c6;
    }
  }
`;

const StyleButton = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
  margin-top: 40px;

  @media only screen and (width <= 1000px) {
    & {
      box-sizing: border-box;
      padding: 20px;
      font-size: 10px;
    }
  }

  & .header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;

    @media only screen and (width <= 580px) {
      & {
        flex-wrap: wrap;
        max-width: 360px;
        margin: 0 auto;
      }
    }

    & .wrapper {
      display: flex;
      height: auto;

      & .Profilewrapper {
        position: relative;
        height: auto;

        & img:nth-child(2) {
          position: absolute;
          right: -10px;
          bottom: 0;
        }
      }

      & .title2 {
        margin-left: 20px;

        @media only screen and (width <= 1000px) {
          & {
            margin-top: 10px;
          }
        }

        & span {
          display: block;
          height: 20px;
          font-size: 13px;
          color: #818181;
          text-align: left;
        }

        & span:nth-child(2) {
          font-size: 16px;
          font-weight: bold;
          color: var(--black);
        }

        @media only screen and (width <= 1000px) {
          & span {
            font-size: 10px;
          }
        }
      }

      & .contect {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 50px;
        font-size: 15px;
        font-weight: bold;
        text-align: left;

        @media only screen and (width <= 1000px) {
          & {
            /* font-size: 10px; */

            /* margin-left: 20px; */
          }
        }

        @media only screen and (width <= 520px) {
          & {
            /* font-size: 10px; */

            margin-left: 20px;
          }
        }

        @media only screen and (width <= 400px) {
          & {
            font-size: 10px;

            /* margin-left: 20px; */
          }
        }
      }
    }

    & .side {
      display: flex;
      gap: 20px;

      @media only screen and (width <= 580px) {
        & {
          /* font-size: 10px; */
          margin: 20px 0;

          /* margin-left: 20px; */
        }
      }
    }
  }

  & .img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (width <= 1000px) {
      & {
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    }

    @media only screen and (width <= 600px) {
      & {
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    & .img {
      max-width: calc(100% / 5);
      min-width: 180px;
    }
  }
`;
export default SearchResult;
