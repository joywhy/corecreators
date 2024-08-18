import React, { useState, useEffect } from 'react';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import MainWrapper from '../components/wrapper/MainWrapper.jsx';
import Nav from '../components/common/Nav.jsx';
import Contents from '../components/Contents.jsx';

import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth, responsiveWidthMiddle } from '../constants';
import { useCampaign } from '../store/useCampaign.js';
import { useUser } from '../store/useUser.js';
import { getUserInfoNo, getUserInfoCate } from '../utils';

import styled from 'styled-components';

const List = () => {
  const [index, setIndex] = useState(0); //사용자가 보고있는 목록의 인덱스
  const {
    userNo,
    loading,
    getList,
    changeList,
    getMemberCampaignList,
    campaign,
    searchList,
    deleteList,
  } = useCampaign();
  const { users, userNoList, getUserNo, getUserNoList } = useUser();
  const [isCreatedReady, setIsCreatedReady] = useState(true);
  const [isOpenNav, setIsOpenNav] = useState(true);
  // console.log(isOpenNav);
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
    const fun = async () => {
      await getCampaignsByUsertype();
      getUserNo(10);
    };
    fun();
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
            setIsOpenNav={setIsOpenNav}
            userNoList={userNoList}
            userNo={userNo}
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
            userNoList={userNoList}
            userNo={userNo}
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
            setIndex={setIndex}
            userNo={userNo}
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
            setIndex={setIndex}
            userNo={userNo}
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
