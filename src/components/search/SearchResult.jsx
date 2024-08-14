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
            <button key={idx}>
              <div className="header">
                <div className="Profilewrapper">
                  <img src={creator.profileImg} alt="프로필 이미지" />
                  <img src={cateImg} alt="유형" />
                </div>
                <div>
                  <p>{creator.type}</p>
                  <p>{creator.id}</p>
                </div>
                <div>
                  <p>{creator.call}</p>
                  <p>{creator.email}</p>
                </div>
                <div>
                  <p>{creator.like}</p>
                  <p>{creator.comment}</p>
                  <p>{creator.fallower}</p>
                </div>
              </div>
              <div className="img-wrapper">
                {creator.imglist.map((img, index) => (
                  <img key={index} src={img} alt="크리에이터 게시물" />
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </StyleDiv>
  );
};
const StyleDiv = styled.div`
  width: 100%;

  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  & header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

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
export default SearchResult;
