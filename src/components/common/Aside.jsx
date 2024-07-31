import React from "react";
import Logo from "./Logo";
import styled from 'styled-components';


const Aside = () => {

  const navList =[
    {
      title: "리스트업",
      iconUrl: "",
    }
  ];
  return (
    <StyledAside>
     <Logo src="src/assets/logo_white.svg"/>
    <nav>
     
    </nav>
   </StyledAside>
  )
}

const StyledAside = styled.aside`
max-width: 250px;
width: 100%;
background-color: var(--black);
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

&  a {
  margin-top: 80px;
  width: 80%;
  /* border: 1px solid red; */
  &  img {
    width: 100%;
  }
}

`;


export  default Aside ;