import React, { useState, useEffect } from 'react';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import MainWrapper from '../components/wrapper/MainWrapper.jsx';
import Nav from '../components/common/Nav.jsx';
import ReportContents from '../components/ReportContents.jsx';
import { useReport } from '../store/useReport.js';
import { getUserInfoNo, getUserInfoCate } from '../utils';
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
  const [isOpenNav, setIsOpenNav] = useState(true);
  // const report = [
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
  //     channelList: [{}],
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
  //     channelList: [{}],
  //     no: 1,
  //     date: '2024.07.28',
  //     memo: '메모',
  //   },
  // ];
  const { report, getReport, getMemberReportList, searchReport, deleteReport } =
    useReport();
  const getReportByUsertype = () => {
    let no = getUserInfoNo();
    let cate = getUserInfoCate();
    // console.log(cate, no);
    if (cate === '거래처') {
      getMemberReportList(no, 10, 10);
    } else if (cate === '최고관리자') {
      getReport(30);
    }
  };

  useEffect(() => {
    const fun = async () => {
      await getReportByUsertype();
    };
    fun();
  }, []);
  // console.log(report);
  const userNo = ['가상컴퍼니', '가상컴퍼니', '가상컴퍼니', '가상컴퍼니'];
  return (
    <StyledDiv>
      {width > responsiveWidth && <Aside />}
      <MainWrapper>
        {width > 1000 && (
          <Nav
            title="보고서"
            setIndex={setIndex}
            index={index}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
            list={report}
            searchList={searchReport}
            deleteList={deleteReport}
            setIsOpenNav={setIsOpenNav}
            isOpenNav={isOpenNav}
            userNo={userNo}
          />
        )}
        {width <= 1000 && isOpenNav && (
          <Nav
            title="보고서"
            setIndex={setIndex}
            index={index}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
            list={report}
            searchList={searchReport}
            deleteList={deleteReport}
            setIsOpenNav={setIsOpenNav}
            isOpenNav={isOpenNav}
            userNo={userNo}
          />
        )}
        {width <= 1000 && !isOpenNav && (
          <ReportContents
            index={index}
            setIndex={setIndex}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
            content={report[index]}
            basic={REPORT_STRUCTURE}
            setIsOpenNav={setIsOpenNav}
          />
        )}
        {width > 1000 && (
          <ReportContents
            index={index}
            setIndex={setIndex}
            isCreatedReady={isCreatedReady}
            setIsCreatedReady={setIsCreatedReady}
            content={report[index]}
            basic={REPORT_STRUCTURE}
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
