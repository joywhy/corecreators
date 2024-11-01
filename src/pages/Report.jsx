import React from 'react';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import MainWrapper from '../components/common/MainWrapper.jsx';
import Nav from '../components/common/Nav.jsx';
// import Contents from '../components/Contents.jsx';
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth } from '../constants';
import styled from 'styled-components';

const Report = () => {
  let { height, width } = useWindowDimensions();
  // const { userInfo ,rememberUser} = useUserInfo();
  return (
    <StyledDiv>
      {width > responsiveWidth && <Aside />}
      <MainWrapper>
        {/* <Nav/> */}
        {/* <Contents/> */}
        <div className="content">report</div>
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
    }
  }
  & .content {
    height: 100%;

    @media only screen and (max-width: 1200px) {
      & {
        height: calc(100vh - 70px);
      }
    }
  }
`;

export default Report;
