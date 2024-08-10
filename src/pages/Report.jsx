import React, { useState } from 'react';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import MainWrapper from '../components/wrapper/MainWrapper.jsx';
import Nav from '../components/common/Nav.jsx';
import ReportContents from '../components/ReportContents.jsx';
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import {
  responsiveWidth,
  responsiveWidthMiddle,
  REPORT_STRUCTURE,
} from '../constants';

import styled from 'styled-components';

const Report = () => {
  let { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [isCreatedReady, setIsCreatedReady] = useState(true);
  const report = [
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
      channelList: [{}],
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
      channelList: [{}],
      no: 1,
      date: '2024.07.28',
      memo: '메모',
    },
  ];

  const searchList = (name) => {
    console.log(name);
  };
  const deleteList = (name) => {
    console.log(name);
  };
  return (
    <StyledDiv>
      {width > responsiveWidth && <Aside />}
      <MainWrapper>
        {width > responsiveWidthMiddle && (
          <Nav
            title="보고서"
            setIndex={setIndex}
            index={index}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
            list={report}
            searchList={searchList}
            deleteList={deleteList}
          />
        )}
        <ReportContents
          index={index}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
          content={report[index]}
          basic={REPORT_STRUCTURE}
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
    }
  }

  & .content {
    height: 100%;

    @media only screen and (width <= 1200px) {
      & {
        height: calc(100vh - 70px);
      }
    }
  }
`;

export default Report;
