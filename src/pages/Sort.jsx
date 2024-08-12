import React from 'react';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import MainWrapper from '../components/wrapper/MainWrapper.jsx';
import Button from '../components/common/Button.jsx';
import Search from '../components/Search.jsx';

import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth } from '../constants';

const Sort = () => {
  let { height, width } = useWindowDimensions();

  return (
    <StyledDiv>
      {width > responsiveWidth && <Aside />}
      <MainWrapper>
        <div className="content">
          <div className="button-wrapper">
            <Button>엑셀 업로드</Button>
          </div>
          <Search />
        </div>
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
    max-width: 100%;
    width: 100%;
    height: 100%;
    background-color: var(--gray-10);

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
export default Sort;
