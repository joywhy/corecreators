import React from "react";
import Li from "./Li"
import styled from 'styled-components';


const Nav = ({title="캠페인",List,index,setIndex}) => {

    const userType =  window.localStorage.getItem("cate");
    const advertiser = userType==="최고관리자"?"광고주":"";

  return (
<StyledDiv>
  <Header title={title}/>
    <nav>
    <ul>
        {List.map((campaign,idx)=>{
            const isActive = idx ===index;
            const handleClick = ()=>{
                setIndex(idx);
            }
         return <Li date={campaign.date} onClick = {handleClick}  isActive={isActive} title= {campaign.name} advertiser={advertiser}  key={idx+campaign.name}/>
        })}
    </ul>
    </nav>
</StyledDiv>
  )
}

const Header = ({title})=>{
    return (
        <StyledHeader>
          <h1 className="text20"> {title}</h1>

         <div >
             <img src="/src/assets/search_icon.svg" alt ="검색아이콘"/>
             <img src="/src/assets/cross_icon.svg" alt ="추가 아이콘"/>
           </div>
        </StyledHeader>
    );
}


const StyledDiv = styled.div`
max-width: 300px;
flex-grow:3;
width: 100%;
border-right: 1px solid var(--gray-10); 
`;

const StyledHeader = styled.header`
    display:flex;
    width: 100%;
    height: 47px;
    justify-content:space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;

    & div{

      display: flex;
      & img:nth-child(1) {
        margin-right: 11px;
      } 
    }
`;

export default Nav;