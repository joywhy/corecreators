import React from 'react';
import styled from 'styled-components';

const MainWrapper = ({ children, backgroundColor }) => {
  return (
    <StyledMain style={{ backgroundColor: backgroundColor }}>
      <section>{children}</section>
    </StyledMain>
  );
};

export default MainWrapper;

const StyledMain = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-40);
  height: 100vh;
  overflow: hidden;

  /* border: 1px solid red; */

  & section {
    display: flex;
    max-width: 1000px;
    width: 100%;

    /* border: 1px solid blue; */
    height: 100%;
    border-radius: 10px;
    background-color: var(--white);
    overflow: hidden;
    margin-top: 20px;
    box-sizing: border-box;
  }

  @media only screen and (width <= 1200px) {
    & {
      height: calc(100vh - 70px);

      /* border:1px solid red; */
    }
  }
`;
