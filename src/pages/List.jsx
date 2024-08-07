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
import styled from 'styled-components';

const List = () => {
  const [index, setIndex] = useState(0);
  const { loading, campaign, error, getList, changeList } = useCampaign();
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

  const [List, setList] = useState([{ ...basicList }]);
  let { height, width } = useWindowDimensions();

  useEffect(() => {
    getList(10);
  }, []);
  // const changeList = (newContent) => {
  //   let newList = List.map((content, idx) => {
  //     return index === idx ? newContent : content;
  //   });
  //   setList(newList);
  // };
  const [newCampaign, setNewCampagin] = useState({ ...basicList });
  const createForm = () => {
    // const
    // let newList = [...List, { ...basicList }];
    // setList(newList);
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
  // console.log(List);
  return (
    <StyledDiv>
      {width > responsiveWidth && <Aside />}
      <MainWrapper>
        {width > responsiveWidthMiddle && (
          <Nav
            deleteList={deleteList}
            List={campaign}
            setIndex={setIndex}
            index={index}
            addList={createForm}
            height={height}
          />
        )}
        <Contents
          changeContent={changeList}
          content={List[index]}
          index={index}
        />
      </MainWrapper>
      {width <= responsiveWidth && <AsideSmall />}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 1200px) {
    & {
      display: block;
      flex-direction: column;
      align-items: end;
      /* justify-content: end; */
    }
  }
`;

export default List;
