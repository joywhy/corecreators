import React from 'react';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import MainWrapper from '../components/wrapper/MainWrapper.jsx';
import Button from '../components/common/Button.jsx';
import Search from '../components/search/Search.jsx';

import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth } from '../constants';

const Sort = () => {
  let { height, width } = useWindowDimensions();

  return (
    <StyledDiv>
      {width > responsiveWidth && <Aside />}
      <Main>
        <div className="content">
          <div className="button-wrapper">
            <Button>엑셀 업로드</Button>
          </div>
          <Search />
        </div>
      </Main>
      {width <= responsiveWidth && <AsideSmall />}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  display: flex;

  /* border: 1px solid red; */

  @media only screen and (width <= 1200px) {
    & {
      display: block;
    }
  }

  & .content {
    /* max-width: 3000px; */
    height: 100%;
    background-color: var(--gray-10);
    overflow: scroll;

    /* width: 3000px;/ */

    /* border: 1px solid red; */

    @media only screen and (width <= 1200px) {
      & {
        height: calc(100vh - 70px);
      }
    }

    & .button-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      & button {
        margin: 30px;
      }
    }
  }
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-40);
  height: 100vh;
  overflow: hidden;

  & .content {
    max-width: 1000px;
  }

  @media only screen and (width <= 1200px) {
    & {
      height: calc(100vh - 70px);

      /* border:1px solid red; */
    }
  }
`;
export default Sort;
