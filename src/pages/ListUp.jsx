import React, { useState, useEffect } from 'react';
import MainWrapper from '../components/wrapper/MainWrapper.jsx';

import Contents from '../components/Contents.jsx';

import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth, responsiveWidthMiddle } from '../constants';
import { useCampaign } from '../store/useCampaign.js';
import { useUser } from '../store/useUser.js';
import { getUserInfoNo, getUserInfoCate } from '../utils';

import styled from 'styled-components';
import Nav from '../components/nav/Nav.jsx';

const ListUp = () => {
  const [index, setIndex] = useState(0); //사용자가 보고있는 목록의 인덱스
  const { userNo, getList, changeList, campaign, searchList, deleteList } =
    useCampaign();
  const { userNoList, getUserNo } = useUser();
  const [isCreatedReady, setIsCreatedReady] = useState(true);

  let { width } = useWindowDimensions();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isContentOpen, setIsContentOpen] = useState(
    window.innerWidth > responsiveWidthMiddle
  );
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
  const handleResize = () => {
    const { innerWidth: width } = window;

    if (width > responsiveWidthMiddle) {
      {
        /* 750px 보다 브라우저 너비가 넓을때 */
      }
      setIsNavOpen(true);
      setIsContentOpen(true);
    } else if (isNavOpen && isContentOpen) {
      {
        /* 750px 보다 브라우저 너비가 작거나 같은데 nav 와 content 가 전부 보여져있을때 */
      }
      setIsNavOpen(true);
      setIsContentOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BoxLayer>
      {isNavOpen && (
        <Nav
          {...{
            setIndex,
            index,
            isCreatedReady,
            setIsCreatedReady,
            searchList,
            deleteList,
            userNoList,
            userNo,
          }}
          isOpenNav={isNavOpen}
          setIsOpenNav={setIsNavOpen}
          setIsContentOpen={setIsContentOpen}
          list={campaign}
        />
      )}
      {isContentOpen && (
        <Contents
          changeContent={changeList}
          content={campaign[index]}
          index={index}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
          setIsOpenNav={setIsNavOpen}
          setIsContentOpen={setIsContentOpen}
          setIndex={setIndex}
          userNo={userNo}
        />
      )}
    </BoxLayer>
  );
};

export default ListUp;

const BoxLayer = styled(MainWrapper)`
  /* dfdf */
`;
