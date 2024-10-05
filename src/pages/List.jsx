import React, { useState, useEffect } from 'react';
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
  const { userNo, getList, changeList, campaign, searchList, deleteList } =
    useCampaign();
  const { userNoList, getUserNo } = useUser();
  const [isCreatedReady, setIsCreatedReady] = useState(true);
  const [isOpenNav, setIsOpenNav] = useState(true);

  let { width } = useWindowDimensions();

  const getCampaignsByUsertype = () => {
    let no = getUserInfoNo();
    let cate = getUserInfoCate();
    getList(100);
  };

  useEffect(() => {
    const fun = async () => {
      await getCampaignsByUsertype();
      getUserNo(10);
    };
    fun();
  }, []);

  // if (loading) {
  //   return (
  //     <StyledDiv>{/* {width > responsiveWidth && <div ></div>} */}</StyledDiv>
  //   );
  // }

  return (
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
  );
};

export default List;
