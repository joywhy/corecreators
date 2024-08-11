import React, { useState, useEffect } from 'react';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import MainWrapper from '../components/wrapper/MainWrapper.jsx';
import Nav from '../components/common/Nav.jsx';
import Contents from '../components/Contents.jsx';

import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth, responsiveWidthMiddle } from '../constants';
import { useCampaign } from '../store/useCampaign.js';
import { getUserInfoNo, getUserInfoCate } from '../utils';
import styled from 'styled-components';

const List = () => {
  const [index, setIndex] = useState(0); //사용자가 보고있는 목록의 인덱스
  const {
    loading,
    getList,
    changeList,
    getMemberCampaignList,
    campaign,
    searchList,
    deleteList,
  } = useCampaign();
  const [isCreatedReady, setIsCreatedReady] = useState(true);
  const [isOpenNav, setIsOpenNav] = useState(false);
  //가데이터
  // const list = [
  //   {
  //     name: '00캠페인',
  //     userNo: 2,
  //     creatorList: [
  //       {
  //         name: '@pattery_Ledner',
  //         cate: '콘텐츠 메이커',
  //         img: '/src/assets/userProfile.png',
  //         icon: '/src/assets/instargram_icon.svg',
  //         follower: '134,233',
  //         view: '15,344',
  //         percent: '80%',
  //       },
  //       {
  //         name: '@pattery_Ledner',
  //         cate: '인플루언서',
  //         img: '/src/assets/userProfile.png',
  //         icon: '/src/assets/instargram_icon.svg',
  //         follower: '134,233',
  //         view: '15,344',
  //         percent: '80%',
  //       },
  //     ],
  //     channelList: [{ ...basic }],
  //     no: 1,
  //     date: '2024.07.27',
  //     memo: '메모',
  //   },
  //   {
  //     name: '**캠페인',
  //     userNo: 2,
  //     creatorList: [
  //       {
  //         name: '@patter',
  //         cate: '콘텐츠 메이커',
  //         img: '/src/assets/userProfile.png',
  //         icon: '/src/assets/instargram_icon.svg',
  //         follower: '134,233',
  //         view: '15,344',
  //         percent: '80%',
  //       },
  //       {
  //         name: '@pattery_Ledner',
  //         cate: '콘텐츠 메이커',
  //         img: '/src/assets/userProfile.png',
  //         icon: '/src/assets/instargram_icon.svg',
  //         follower: '134,233',
  //         view: '15,344',
  //         percent: '80%',
  //       },
  //     ],
  //     channelList: [{ ...basic }],
  //     no: 1,
  //     date: '2024.07.28',
  //     memo: '메모',
  //   },
  // ];
  let { width } = useWindowDimensions();

  const getCampaignsByUsertype = () => {
    let no = getUserInfoNo();
    let cate = getUserInfoCate();
    if (cate === '거래처') {
      getMemberCampaignList(no, 10, 10);
    } else if (cate === '최고관리자') {
      getList(30);
    }
  };

  useEffect(() => {
    getCampaignsByUsertype();
  }, []);

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
            title="캠페인"
            setIndex={setIndex}
            index={index}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
            list={campaign}
            searchList={searchList}
            deleteList={deleteList}
            isOpenNav={isOpenNav}
          />
        )}
        {width <= responsiveWidthMiddle && isOpenNav && (
          <Nav
            style={{ width: '100vw' }}
            title="캠페인"
            setIndex={setIndex}
            index={index}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
            list={campaign}
            searchList={searchList}
            deleteList={deleteList}
            setIsOpenNav={setIsOpenNav}
            isOpenNav={isOpenNav}
          />
        )}
        {width <= responsiveWidthMiddle && !isOpenNav && (
          <Contents
            changeContent={changeList}
            content={campaign[index]}
            index={index}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
            setIsOpenNav={setIsOpenNav}
          />
        )}
        {width > responsiveWidthMiddle && (
          <Contents
            changeContent={changeList}
            content={campaign[index]}
            index={index}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
            setIsOpenNav={setIsOpenNav}
          />
        )}
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
