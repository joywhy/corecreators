import React from "react";

import styled from 'styled-components';


const MainWrapper = ({children}) => {
  
  return (
  <StyledMain>
    <section>
  {children}
  </section>
  </StyledMain> 
  )
}

export default MainWrapper;

const StyledMain = styled.main`
display: flex;
width: 100%;
/* border: 1px solid red; */
justify-content: center;
align-items: center;
background-color:var(  --gray-40) ;

& section{
  display: flex;
max-width: 1000px;
width: 100%;
max-height: 1000px;
height: 100%;
border-radius: 10px;
/* border: 1px solid red; */
background-color: var(--white);
overflow: hidden;
}
@media only screen and (max-width: 800px) {
    & {
    height:calc(100vh - 70px);

    }
  }
`;