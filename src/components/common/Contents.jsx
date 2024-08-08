import React, { useState, useEffect } from 'react';
import CampaignForm from './common/CampaignForm.jsx';
import styled from 'styled-components';

import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidthMiddle } from '../constants/index.js';
import { useUserInfo } from '../store/userInfoStore.js';
import { useHasManagerPermission } from '../hooks/useHasManagerPermission.jsx';

const Contents = ({ content, index, changeContent }) => {
  //가데이터
  const creatorList = [
    {
      name: '@pattery_Ledner',
      cate: '콘텐츠 메이커',
      img: '/src/assets/userProfile.png',
      icon: '/src/assets/instargram_icon.svg',
      follower: '134,233',
      view: '15,344',
      percent: '80%',
    },
    {
      name: '@pattery_Ledner',
      cate: '인플루언서',
      img: '/src/assets/userProfile.png',
      icon: '/src/assets/instargram_icon.svg',
      follower: '134,233',
      view: '15,344',
      percent: '80%',
    },
  ];

  const { userInfo, rememberUser } = useUserInfo();
  let { isManager, userType, advertiser } = useHasManagerPermission();
  useEffect(() => {
    rememberUser();
  }, []);
  let { height, width } = useWindowDimensions();

  const handleBackCick = () => {
    alert('뒤로가기');
  };
  return (
    <StyledDiv style={{ height: height - 70 }}>
      {width < responsiveWidthMiddle && (
        <div className="backButton" onClick={handleBackCick}>
          <img src="/src/assets/common/back_icon.svg" alt="뒤로가기" />
          뒤로가기
        </div>
      )}
      {isManager ? (
        <CampaignForm
          content={content}
          name={content.name}
          advertiser={advertiser}
          memo={content.memo}
          channelList={content.channelList}
          changeContent={changeContent}
          index={index}
        />
      ) : (
        <CreatorList list={creatorList} index={index} />
      )}
    </StyledDiv>
  );
};

const CreatorList = ({ list }) => {
  return (
    <StyledContainer>
      <header>
        <span>팔로워수</span>
        <span>최근 영상 조회수</span>
        <span>팔로워수 대비 조회수 %</span>
      </header>
      <ul>
        {list.map((user, idx) => (
          <Li
            name={user.name}
            cate={user.cate}
            img={user.img}
            icon={user.icon}
            follower={user.follower}
            view={user.view}
            percent={user.percent}
            key={user.name + idx}
          />
        ))}
      </ul>
    </StyledContainer>
  );
};
const Li = (props) => {
  const { name, cate, img, icon, follower, view, percent } = props;
  return (
    <StyledLi>
      <div className="profile">
        <div className="imgWrapper">
          <img src={img} alt="유저" />
          <img className="icon" src={icon} alt="유저" />
        </div>
        <div className="title">
          <p>{cate}</p>
          <h2>{name}</h2>
        </div>
      </div>

      <div className="des">
        <span>{follower}</span>
        <span>{view}</span>
        <span>{percent}</span>
      </div>
    </StyledLi>
  );
};

const StyledDiv = styled.div`
  flex-grow: 7;
  overflow: scroll;
  @media only screen and (max-width: 1200px) {
    & {
      height: calc(100vh - 70px);
      /* border:1px solid red; */
      overflow: scroll;
    }
  }
  & .backButton {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    padding: 10px 10px 0px 10px;

    & img {
      /* border: 1px solid red; */
    }
  }
`;

const StyledContainer = styled.div`
  padding: 14px 25px;

  & header {
    display: flex;
    justify-content: end;
    margin-bottom: 5px;
    & span {
      margin-left: 20px;
      font-size: 10px;
    }
  }
`;
const StyledLi = styled.li`
  width: 100%;
  border-radius: 10px;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  &:hover {
    background-color: var(--gray-10);
  }
  & .profile {
    display: flex;

    & .imgWrapper {
      position: relative;
      width: 56px;
      height: 47px;
      & img {
        position: absolute;
        display: block;
      }
      & img.icon {
        left: 30px;
        bottom: 0;
      }
    }

    & .title {
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin-left: 18px;
      & p {
        font-size: 13px;
        color: #818181;
      }
      & h2 {
        font-size: 16px;
        font-weight: bold;
        margin-top: 5px;
      }
    }
  }
  & .des {
    display: flex;
    width: 300px;
  }
  & span {
    display: block;
    max-width: 100px;
    flex-grow: 1;
    text-align: end;
    font-size: 14px;
    font-weight: bold;
  }
`;
export default Contents;