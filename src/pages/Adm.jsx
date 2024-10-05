import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import MainWrapper from '../components/wrapper/MainWrapper.jsx';

import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidth } from '../constants';

import styled from 'styled-components';

const Adm = () => {
  let { height, width } = useWindowDimensions();
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  );
};

export default Adm;
