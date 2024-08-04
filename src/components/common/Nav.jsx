import React, { useState } from "react";
import Li from "./Li"
import styled from 'styled-components';

import useWindowDimensions from '../../hooks/useWindowDimensions.jsx'

const Nav = ({title="캠페인",List,index,setIndex,addList,deleteList}) => {
   const [isModal,setIsModal]=useState(false);
    const userType =  window.localStorage.getItem("cate");
    const advertiser = userType==="최고관리자"?"광고주":"";
    // console.log(isModal);
    let { height, width } = useWindowDimensions();
  return (
<StyledDiv style={{height: height}}>
  <Header title={title} addList={addList}/>
    <nav>
    <ul>
        {List.map((campaign,idx)=>{
            const isActive = idx ===index;
            const handleClick = ()=>{
                setIndex(idx);
            }
            const handleDelete = ()=>{
                deleteList(idx);
                setIsModal(false);
                if(idx ===0 &&idx===index){
                    setIndex(0);
                }else  if(idx <= index ){
                    setIndex(index-1);
                }
            }
            const onClickDeleteChattingRoom=(e)=>{
                e.preventDefault();
                setIsModal(idx);
            }
         return (
            <StyledContainer key={idx+campaign.name}>
         <Li  onContextMenu={onClickDeleteChattingRoom} date={campaign.date} onClick = {handleClick}  isActive={isActive} title= {campaign.name} advertiser={advertiser}  key={idx+campaign.name}/>
         {isModal===idx&&<div className="modal" onClick={handleDelete} key={idx+"모달"}>삭제하기</div>}
         </StyledContainer>
        )
        })}
    </ul>
    </nav>
</StyledDiv>
  )
}

const Header = ({title,addList})=>{
    const isManager =  window.localStorage.getItem("cate")==="최고관리자";
  
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
            {isManager? ( <div onClick={addList}>            
             <img src="/src/assets/common/cross_icon.svg" alt ="추가 아이콘"/>
             </div>):
            <div></div>
            }
           
           </div>
        </StyledHeader>
    );
}

const StyledContainer =styled.div`
position: relative;
/* border:1px solid red; */
width:100%;
/* height:50px; */

& .modal {
    position: absolute;
    top: 10px;
    left: 100px;
    width: 100px;
    height:40px;
    background-color:white;
    border-radius: 5px;
    z-index:10;
    display:flex;
    justify-content: center;
    align-items: center;
    border:1px solid black;
    /* width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white; */
}
`;
const StyledDiv = styled.div`
max-width: 300px;
flex-grow:3;
width: 100%;
border-right: 1px solid var(--gray-10); 
overflow: scroll;
@media only screen and (max-width: 800px) {
    & {
    height:calc(100vh - 70px);
    /* border:1px solid red; */
    overflow: scroll;
    }
  }
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