import React,{useState} from "react";
import CampaignForm from "./CampaignForm";
import styled from 'styled-components';


const Contents = ({List,index}) => {
  const isManager =  window.localStorage.getItem("cate")==="최고관리자";
  // console.log(List);
  const userType =  window.localStorage.getItem("cate");
  const advertiser = userType==="최고관리자"?"광고주":"";

  return (
<StyledDiv>
   {
    isManager? 
    // <CampaignForm name = {List[index].name} advertiser={advertiser}/>
    <CampaignForm />
    :
    <CreatorList list = {List[index].creatorList}/>
   }
</StyledDiv>
  )
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

   <div className="des">
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
padding: 14px 25px;

& header {
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
& .des {
  display: flex;
  width: 300px;
}
& span  {
    display:block;
    max-width: 100px;
    flex-grow: 1;
    text-align: end;
    font-size: 14px;
    font-weight: bold;
  }
`;
export default Contents;