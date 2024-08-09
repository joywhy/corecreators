import React, { useState, useEffect, useCallback } from 'react';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import MainWrapper from '../components/common/MainWrapper.jsx';
import Nav from '../components/common/Nav.jsx';
import Contents from '../components/Contents.jsx';

import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth, responsiveWidthMiddle } from '../constants';
import {
  CHANNEL_STRUCTURE as basic,
  CAMPAIGN_STRUCTURE as basicList,
} from '../constants';
import { useCampaign } from '../store/useCampaign.js';
import { useUserInfo } from '../store/userInfoStore.js';
import styled from 'styled-components';

const List = () => {
  const [index, setIndex] = useState(0);
  const {
    loading,
    campaign,
    error,
    getList,
    changeList,
    getMemberCampaignList,
  } = useCampaign();
  // const {userInfo,rememberUser}= useUserInfo();
  const [isCreatedReady, setIsCreatedReady] = useState(true);
  const list = [
    {
      name: '00캠페인',
      userNo: 2,
      creatorList: [
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
      ],
      channelList: [{ ...basic }],
      no: 1,
      date: '2024.07.27',
      memo: '메모',
    },
    {
      name: '**캠페인',
      userNo: 2,
      creatorList: [
        {
          name: '@patter',
          cate: '콘텐츠 메이커',
          img: '/src/assets/userProfile.png',
          icon: '/src/assets/instargram_icon.svg',
          follower: '134,233',
          view: '15,344',
          percent: '80%',
        },
        {
          name: '@pattery_Ledner',
          cate: '콘텐츠 메이커',
          img: '/src/assets/userProfile.png',
          icon: '/src/assets/instargram_icon.svg',
          follower: '134,233',
          view: '15,344',
          percent: '80%',
        },
      ],
      channelList: [{ ...basic }],
      no: 1,
      date: '2024.07.28',
      memo: '메모',
    },
  ];
  // let initialList =
  // const [List, setList] = useState([{ ...basicList }]);
  let { height, width } = useWindowDimensions();

  const getCampaignsByUsertype = () => {
    let no = window.localStorage.getItem('no');
    let cate = window.localStorage.getItem('cate');
    // console.log(no);
    // console.log(cate);
    if (cate === '거래처') {
      getMemberCampaignList(no, 10, 10);
    } else if (cate === '최고관리자') {
      getList(10);
    }
  };
  useEffect(() => {
    getCampaignsByUsertype();
  }, []);
  // const changeList = (newContent) => {
  //   let newList = List.map((content, idx) => {
  //     return index === idx ? newContent : content;
  //   });
  //   setList(newList);
  // };
  const [newCampaign, setNewCampagin] = useState({ ...basicList });
  const createForm = () => {
    setIndex(campaign.length);
  };
  const deleteList = (idx) => {
    const newList = List.filter((_, index) => index !== idx);

    if (newList.length === 0) {
      setList([{ ...basicList }]);
    } else {
      setList(newList);
    }
  };
  if (loading) {
    return (
      <StyledDiv>{/* {width > responsiveWidth && <div ></div>} */}</StyledDiv>
    );
  }
  return (
    <StyledDiv>
      {width > responsiveWidth && <Aside />}
      <MainWrapper>
        {width > responsiveWidthMiddle && (
          <Nav
            deleteList={deleteList}
            // List={list}
            setIndex={setIndex}
            index={index}
            addList={createForm}
            height={height}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
          />
        )}
        <Contents
          changeContent={changeList}
          content={campaign[index]}
          index={index}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
        />
      </MainWrapper>
      {width <= responsiveWidth && <AsideSmall />}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (width <= 1200px) {
    & {
      display: block;
      flex-direction: column;
      align-items: end;
    }
  }
`;

export default List;
