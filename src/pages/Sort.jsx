import React from 'react';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import Button from '../components/common/Button.jsx';
import Search from '../components/search/Search.jsx';

import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth } from '../constants';

const Sort = () => {
  let { height, width } = useWindowDimensions();

  return (
    <Main>
      <div className="content">
        <div className="button-wrapper">
          <Button>엑셀 업로드</Button>
        </div>
        <Search />
      </div>
    </Main>
  );
};

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
    height: 100%;
    background-color: var(--gray-10);
    overflow: scroll;
    max-width: 1000px;

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

  @media only screen and (width <= 1200px) {
    & {
      height: calc(100vh - 70px);
    }
  }
`;
export default Sort;
