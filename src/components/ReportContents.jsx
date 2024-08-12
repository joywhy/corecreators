import React from 'react';
import CampaignForm from './common/CampaignForm.jsx';
import styled from 'styled-components';

import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidthMiddle } from '../constants/index.js';
import { useReport } from '../store/useReport.js';
import { getUserInfoCate } from '../utils';

const ReportContents = ({
  index,
  isCreatedReady,
  setIsCreatedReady,
  content,
  setIsOpenNav,
}) => {
  //가데이터
  const reportList = [
    {
      reportImg: '/src/assets/reportImg.svg',
      name: '@pattery_Ledner',
      cate: '콘텐츠 메이커',
      title: '강아지 아이스크림 만들어 보기',
      img: '/src/assets/userProfile.png',
      icon: '/src/assets/instargram_icon.svg',
      view: '15,344',
      like: '134,233',
      comment: '23',
    },
    {
      reportImg: '/src/assets/reportImg.svg',
      name: '@pattery_Ledner',
      cate: '콘텐츠 메이커',
      title: '강아지 아이스크림 만들어 보기',
      img: '/src/assets/userProfile.png',
      icon: '/src/assets/instargram_icon.svg',
      view: '15,344',
      like: '134,233',
      comment: '23',
    },
  ];
  const { report, changeList, setList } = useReport();
  let isManager = getUserInfoCate() === '최고관리자';
  // console.log(isManager);
  const advertiser = '관리자';
  let { width } = useWindowDimensions();

  const handleBackCick = () => {
    // alert('뒤로가기');
    setIsOpenNav(true);
  };
  return (
    <StyledDiv>
      {width < responsiveWidthMiddle && (
        <div className="back-button" onClick={handleBackCick}>
          <img src="/src/assets/common/back_icon.svg" alt="뒤로가기" />
          뒤로가기
        </div>
      )}
      {isManager ? (
        <CampaignForm
          list={content} //곧 삭제
          changeList={changeList}
          setList={setList}
          index={index}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
        />
      ) : (
        <StyledContainer>
          {reportList.map((user, idx) => (
            <Li {...user} key={user.name + 'report'+idx} />
          ))}
        </StyledContainer>
      )}
    </StyledDiv>
  );
};

const Li = (props) => {
  // {
  //     reportImg: '/src/assets/reportImg.svg',
  //     name: '@pattery_Ledner',
  //     cate: '콘텐츠 메이커',
  //     title: '강아지 아이스크림 만들어 보기',
  //     img: '/src/assets/userProfile.png',
  //     icon: '/src/assets/instargram_icon.svg',
  //     view: '15,344',
  //     like: '134,233',
  //     comment: '80%',
  //   },
  const { reportImg, title, name, cate, img, icon, like, view, comment } =
    props;
  return (
    <StyledLi>
      <button>
      <div className="profile">
        <div className="img-wrapper">
          <img src={reportImg} alt="보고서 이미지" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <div>
            <img className="icon" src={icon} alt="보고서타입" />
            <img className="userProfile" src={img} alt="유저" />
            <h2>{name}</h2>
          </div>
        </div>
      </div>

      <div className="des">
        <span>
          <img src="/src/assets/common/view.svg" alt="뷰" />
          {view}
        </span>
        <span>
          <img src="/src/assets/common/like.svg" alt="좋아요" />
          {like}
        </span>
        <span>
          <img src="/src/assets/common/comment.svg" alt="댓글" />
          {comment}
        </span>
      </div>
      </button>
    </StyledLi>
  );
};

const StyledDiv = styled.div`
  flex-grow: 7;
  overflow: scroll;
  height: 100vh;

  @media only screen and (width <= 1200px) {
    & {
      height: calc(100vh - 70px);
      overflow: scroll;
    }
  }

  & .back-button {
    display: flex;
    align-items: center;
    padding: 10px 10px 0;
  }
`;

const StyledContainer = styled.div`
  padding: 14px 25px;
`;
const StyledLi = styled.li`
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  list-style: none;
  &:hover {
    background-color: #f5f5f5;
  }

  & button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border:none;
  background-color: white;
  &:hover {
    background-color: #f5f5f5;
  }
  }
  & .profile {
    display: flex;

    & .img-wrapper {
      position: relative;
      display: flex;
      align-items: center;

      & img {
        display: block;
      }
    }

    & .title {
      margin-left: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      & h2 {
        font-size: 14px;
        font-weight: bold;
      }

      & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
      }

      & div img {
        width: 23px;
      }

      & div h2 {
        display: inline-block;
        font-size: 14px;
        color: gray;
      }
    }
  }

  & .des {
    display: flex;
    width: 300px;
    justify-content: end;
  }

  & span {
    display: block;

    /* max-width: 80px; */
    flex-grow: 1;
    text-align: end;
    font-size: 14px;
    font-weight: bold;
  }
`;
export default ReportContents;
