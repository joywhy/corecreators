import React from "react";
import Aside from "../components/aside/Aside.jsx";
import AsideSmall from "../components/aside/AsideSmall.jsx";
import MainWrapper from '../components/common/MainWrapper.jsx'
import Nav from "../components/common/Nav.jsx"
import Contents from "../components/common/Contents.jsx"
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';


const Sort = () => {
  let { height, width } = useWindowDimensions();
  
  return (
    <StyledDiv>
    {width>800&&<Aside/>}
    <MainWrapper>
     {/* <Nav/> */}
     {/* <Contents/> */}
    </MainWrapper>
    {width<=800&&<AsideSmall/>}
    </StyledDiv>
    )
  }
  
  const StyledDiv = styled.div`
  width:100%;
  display: flex;
  @media only screen and (max-width: 800px) {
    & {
      display:block;
    }
  }
  `;
export default Sort;