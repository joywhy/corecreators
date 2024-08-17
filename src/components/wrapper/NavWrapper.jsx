import React from 'react';
import styled from 'styled-components';

const NavWrapper = ({ children, isOpenNav }) => {
  // console.log(window.location.pathname);
  const isReportNav = window.location.pathname === '/report';
  return (
    <StyledDiv
      className={
        isOpenNav ? (isReportNav ? 'isshow report-view' : 'isshow') : ''
      }
    >
      {children}
    </StyledDiv>
  );
};

export default NavWrapper;
const StyledDiv = styled.div`
  position: relative;
  max-width: 300px;
  flex-grow: 3;
  width: 100%;
  border-right: 1px solid var(--gray-10);
  height: 100vh;
  overflow: scroll;

  @media only screen and (width <= 1200px) {
    & {
      height: calc(100vh - 70px);
      overflow: scroll;
    }
  }

  @media only screen and (width <= 750px) {
    &.isshow {
      max-width: 100vw;
      width: 100vw;
    }
  }

  @media only screen and (width <= 1000px) {
    &.report-view {
      max-width: 100vw;
      width: 100vw;
    }
  }
`;
