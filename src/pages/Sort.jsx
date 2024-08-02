import React from "react";
import Aside from "../components/common/Aside.jsx";

import MainWrapper from '../components/common/MainWrapper.jsx'
import Nav from "../components/common/Nav.jsx"
import Contents from "../components/common/Contents.jsx"
import styled from 'styled-components';


const Sort = () => {
  
  return (
    <StyledDiv>
    <Aside/>
    <MainWrapper>
     {/* <Nav/> */}
     {/* <Contents/> */}
    </MainWrapper>
    </StyledDiv>
    )
  }
  
  const StyledDiv = styled.div`
  width:100%;
  display: flex;
  `;
export default Sort;