import React, { useState } from 'react';
import CampaignForm from './common/CampaignForm.jsx';
import { ApexChart } from '../components/Chart.jsx';
import styled from 'styled-components';

import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidthMiddle, REPORT_STRUCTURE } from '../constants/index.js';
import { useReport } from '../store/useReport.js';
import { getUserInfoCate } from '../utils';

const ReportContents = ({
  index,
  isCreatedReady,
  setIsCreatedReady,
  content,
  setIndex,
  setIsOpenNav,
  userNo,
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
  const advertiser = '관리자';
  let { width } = useWindowDimensions();

  const handleBackCick = () => {
    setIsOpenNav(true);
  };
  return (
    <StyledDiv>
      {width < 1000 && (
        <div className="back-button" onClick={handleBackCick}>
          <img src="/src/assets/common/back_icon.svg" alt="뒤로가기" />
          뒤로가기
        </div>
      )}
      {isManager ? (
        <CampaignForm
          list={report}
          changeList={changeList}
          setList={setList}
          index={index}
          setIndex={setIndex}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
          basic={REPORT_STRUCTURE}
          userNo={userNo[index] ? userNo[index] : ''}
        />
      ) : (
        <StyledContainer>
          {reportList.map((user, idx) => (
            <Li {...user} key={user.name + 'report' + idx} />
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
  const [isOpen, setIsOpen] = useState(false);
  const charts = [
    {
      series: [
        { name: '조회수', data: [1300, 1500, 3000, 3500, 4000, 4700, 6000] },
      ],
      xaxis: {
        type: 'datetime',
        categories: [
          '2024-01-19T00:00:00.000Z',
          '2024-02-19T01:30:00.000Z',
          '2024-03-19T02:30:00.000Z',
          '2024-04-19T03:30:00.000Z',
          '2024-05-19T04:30:00.000Z',
          '2024-06-19T05:30:00.000Z',
          '2024-07-19T06:30:00.000Z',
        ],
      },
      colors: ['#ff4f19'],
    },
    {
      series: [
        {
          name: '좋아요',
          data: [11, 32, 45, 52, 64, 72, 100],
        },
        {
          name: '댓글',
          data: [1, 5, 10, 30, 32, 40, 50],
        },
      ],
      xaxis: {
        type: 'datetime',
        categories: [
          '2024-01-19T00:00:00.000Z',
          '2024-02-19T01:30:00.000Z',
          '2024-03-19T02:30:00.000Z',
          '2024-04-19T03:30:00.000Z',
          '2024-05-19T04:30:00.000Z',
          '2024-06-19T05:30:00.000Z',
          '2024-07-19T06:30:00.000Z',
        ],
      },
    },
  ];

  return (
    <StyledLi className={isOpen ? 'chart-open' : ''}>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={isOpen ? 'chart-open' : ''}
      >
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
      {isOpen &&
        charts.map((chart, idx) => (
          <ApexChart
            series={chart.series}
            xaxis={chart.xaxis}
            colors={chart.colors ? chart.colors : undefined}
            key={idx + '차트'}
          />
        ))}
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
  margin-top: 10px;

  &:hover {
    background-color: #f5f5f5;
  }

  &.chart-open {
    height: 650px;
    background-color: #f5f5f5;
  }

  & button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background-color: white;

    @media only screen and (width <= 1000px) {
      & {
        /* height: calc(100vh - 70px);
      overflow: scroll; */

        /* border:1px solid red; */
        width: 100%;
      }
    }

    &:hover {
      background-color: #f5f5f5;
    }

    &.chart-open {
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
