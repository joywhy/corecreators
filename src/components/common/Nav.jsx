import React, { useState } from "react";
import Li from "./Li"
import styled from 'styled-components';


const Nav = ({title="캠페인",List,index,setIndex,addList}) => {

    const userType =  window.localStorage.getItem("cate");
    const advertiser = userType==="최고관리자"?"광고주":"";

  return (
<StyledDiv>
  <Header title={title} addList={addList}/>
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

const Header = ({title,addList})=>{
    const [isSearch,setIsSearch]= useState(false);
    const [value,setValue] = useState("");

    const handleCLick = ()=>{
        setIsSearch(prev=>!prev);
    };

    if(isSearch){
     return (
      <StyledHeader2>
           <input placeholder="Search..."/>
           <img src="/src/assets/search_icon.svg"  alt ="검색아이콘"/>
         
        </StyledHeader2>
     )
    }
    return (
        <StyledHeader>
          <h1 className="text20"> {title}</h1>

         <div >
            <button onClick = {handleCLick}>
            <img src="/src/assets/search_icon.svg"  alt ="검색아이콘"/>
            </button>
            <div onClick={addList}>            
             <img src="/src/assets/common/cross_icon.svg" alt ="추가 아이콘"/>
             </div>
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
    /* transition-property: all;
    transition: all 0.5s linear 0.5s; */
    & div{

      display: flex;
      & img:nth-child(1) {
        margin-right: 11px;
      } 
    }
    & button  {
        background-color: white;
        border: none;
        & img {
            height: 100%;
        } 
    }
`;
const StyledHeader2 = styled.header`
    position: relative;
    width: 100%;
    height: 47px;
    justify-content:space-between;
    align-items: center;
    padding: 7px;
    box-sizing: border-box; 

    & input  {
        border-radius: 5px;
        padding-left: 35px;
        height: 100%;
        box-sizing :border-box;
        background-color: #d1d1d1;
        border: none;
        width: 100%;
    }
    & input:focus {
        outline: 2px solid var(--main-red);
    }
    & img {
        position: absolute;
        top:15px;
        /* transform: x; */
        left: 20px;
    }
`;

export default Nav;