import React from "react";
import Logo from "../components/common/Logo";
import LoginForm from "../components/login-form/LoginForm";

import styled from 'styled-components';

const Login = () => {
  const email = "corecreators.korea@gmail.com";
  return (
   <>
   <StyledDiv >
      <Logo src="src/assets/logo_white.svg"/>
   </StyledDiv>

   <StyledrightDiv>
      <LoginForm/>
      <p className="text13">
   코어 크리에이터스 솔루션 접속 문의는 
   공식 메일로 해주시기 바랍니다. 
   </p>
   <p>{email}</p>

   
   </StyledrightDiv>
  
   </>
  )
}

const StyledDiv = styled.div`
position: relative;
width: 50%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: black;

@media only screen and (max-width: 800px) {
    & {
      width: 100vw;
      height: calc( 100vh*0.3);
    }
    & img {
       width: 50%;
    }
  }
  @media only screen and (max-width: 280px) {
    & {
      width: 100vw;
      height: calc( 100vh*0.3);
    }
   
  }

`;

const StyledrightDiv = styled(StyledDiv)`
position: absolute;
top:0;
left: 50%;
display: flex;
justify-content: center;
background-color: white;
flex-direction: column;
@media only screen and (max-width: 800px) {
    & {
      position: absolute;
      margin-top: 300px;
      /* border: 1px solid red; */
      box-sizing: border-box;
      width: 100%;
      height: calc( 100vh*0.7);
      top:0;
      left: 0;
      justify-content:start;
      padding-top: 30px;
 
    }
  }
& p {
  margin-top: 20px;
  text-align: center;
  @media only screen and (max-width: 400px) {
    & {
      width: 80%;
      
    }
  }
}
& p:nth-of-type(1) {
  margin-top: 79px;
}
`;

export default Login;