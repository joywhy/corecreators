import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aside from '../components/aside/Aside.jsx';
import AsideSmall from '../components/aside/AsideSmall.jsx';
import MainWrapper from '../components/wrapper/MainWrapper.jsx';

import User from '../components/user/User.jsx';
import Log from '../components/log/Log.jsx';
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth } from '../constants';

import styled from 'styled-components';

const Adm = () => {
  let { height, width } = useWindowDimensions();
  return (
    <StyledDiv>
      {width > responsiveWidth && <Aside />}
      <MainWrapper>
        <div className="content">
          <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/log" element={<Log />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
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
    width: 100%;
    height: 100%;

    @media only screen and (width <= 1200px) {
      & {
        height: calc(100vh - 70px);
      }
    }
  }
`;

export default Adm;
