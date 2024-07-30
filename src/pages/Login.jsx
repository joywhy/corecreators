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

`;
const StyledrightDiv = styled(StyledDiv)`
position:absolute;
top:0;
left: 50%;
display: flex;
justify-content: center;
background-color: white;
flex-direction: column;

& p {
  margin-top: 20px;
}
& p:nth-of-type(1) {
  margin-top: 79px;
}
`;

export default Login;