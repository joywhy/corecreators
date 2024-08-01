import React from "react";

import styled from 'styled-components';


const Li = ({date="2024.7.7",isActive,advertiser ,onClick,title})=>{
   
  const userType =  window.localStorage.getItem("cate");

    if (userType==="최고관리자"){
    return ( 
    <StyledLi className={isActive?"active ":""} onClick ={onClick}>
     <div className="title">
        <h1 className="text14"> {title}</h1>
        {advertiser&&<p className="text13">{advertiser}</p>}
     </div>

     <p className="date text10">{date}</p>
    </StyledLi>
    );}


    return (
        <StyledLi className={isActive?"active":""} onClick ={onClick}>
        <h1 className="text14 title"> {title}</h1>

         <p className="date text10">{date}</p>
        </StyledLi>
    );
}

const StyledLi = styled.li`
 display:flex;
    width: 100%;
    /* height: 37px; */
    justify-content:space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;

    &.active, &:hover {
      background-color: var(--gray-10);
    }
    & .title {

      & p {
       color: #818181;
       margin-top: 7px;
      }
    }

    & p {
      
    color: #818181;
    }

`;

export default Li;