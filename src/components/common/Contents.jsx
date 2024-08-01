import React from "react";

import styled from 'styled-components';


const Contents = ({List,index}) => {
  const isManager =  window.localStorage.getItem("cate")==="최고관리자";
  // console.log(List);
  return (
<StyledDiv>
   {
    isManager? 
    <CampaignForm/>
    :
    <CreatorList list = {List[index].creatorList}/>
   }
</StyledDiv>
  )
}
const CampaignForm = ()=>{

  return (<>CampaignForm</>);
}

const CreatorList = ({list})=> {
  return (
  <StyledContainer>
  <header>
    <span>팔로워수</span><span>최근 영상 조회수</span><span>팔로워수 대비 조회수 %</span>
  </header>
  <ul>
    {list.map((user,idx)=><Li name = {user.name} 
    cate = {user.cate}
    img = {user.img}
    icon = {user.icon}
    follower = {user.follower}
    view = {user.view}
    percent = {user.percent}

    key={user.name+ idx}/>)}
  </ul>
  </StyledContainer>

);
}
const Li = (props)=>{
  const {name,cate,img,icon,follower,view,percent} = props;
  return (
  <StyledLi>
   <div className="profile">
      <div className ="imgWrapper">
        <img src ={img} alt="유저"/>
        <img  className ="icon" src ={icon} alt="유저"/>
      </div>
      <div className="title">
        <p>{cate}</p>
        <h2>{name}</h2>
      </div>
   </div>

   <div>
    <span>{follower}</span>
    <span>{view}</span>
    <span>{percent}</span>
   </div>
  </StyledLi>);
}

const StyledDiv = styled.div`
flex-grow:7;
`;

const StyledContainer = styled.div`
/* border:1px solid red; */
padding: 14px 25px;

& header {
  /* border:1px solid red; */
  display: flex;
  justify-content: end;
  margin-bottom: 5px;
  & span {
    margin-left: 20px;
    font-size: 10px;
  }
}
`;
const StyledLi = styled.li`
width: 100%;
border-radius: 10px;
height: 66px;
display: flex;
/* border: 1px solid red; */
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding :10px;
&:hover {
  background-color: var(--gray-10)
}
& .profile {
  display: flex;

  & .imgWrapper {
    position: relative;
    /* border: 1px solid red; */
    width: 56px;
    height: 47px;
    & img {
      position: absolute;
      display: block;
    }
    & img.icon {
      left: 30px;
      bottom: 0;
    }
  }

  & .title {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-left: 18px;
    & p {
    font-size: 13px;
    color: #818181;
    }
    & h2 {
      font-size: 16px;
      font-weight: bold;
      margin-top: 5px;

    }
  }
}
`;
export default Contents;