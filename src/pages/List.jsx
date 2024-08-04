import React,{useState} from "react";
import Aside from "../components/common/Aside.jsx";

import MainWrapper from '../components/common/MainWrapper.jsx'
import Nav from "../components/common/Nav.jsx"
import Contents from "../components/common/Contents.jsx"
import styled from 'styled-components';


const List = () => {
  const [index,setIndex] = useState(0);
  let basic = {
    channelType:"instargram",
   channel:""
};
let basicList = {
  name:"캠페인명",
  userNo:"",
  creatorList :[],
  channelList:[{...basic}],
  no:"",
  date: "2024.07.27",
  memo: "메모"
};

  const list = [
    {
    name : "00캠페인",
    userNo: 2,
    creatorList: [
        {
      name: "@pattery_Ledner",
      cate: "콘텐츠 메이커",
      img :"/src/assets/userProfile.png",
      icon :"/src/assets/instargram_icon.svg",
       follower: "134,233",
       view: "15,344",
       percent :"80%",
    },
    {
        name: "@pattery_Ledner",
        cate: "인플루언서",
        img :"/src/assets/userProfile.png",
        icon :"/src/assets/instargram_icon.svg",
         follower: "134,233",
         view: "15,344",
         percent :"80%",
      },
],
channelList:[{...basic}],
    no:1,
    date: "2024.07.27",
    memo: "메모"
},
{
    name : "**캠페인",
    userNo: 2,
    creatorList: [
        {
      name: "@patter",
      cate: "콘텐츠 메이커",
      img :"/src/assets/userProfile.png",
      icon :"/src/assets/instargram_icon.svg",
       follower: "134,233",
       view: "15,344",
       percent :"80%",
    },
    {
        name: "@pattery_Ledner",
        cate: "콘텐츠 메이커",
        img :"/src/assets/userProfile.png",
        icon :"/src/assets/instargram_icon.svg",
         follower: "134,233",
         view: "15,344",
         percent :"80%",
      },
],
channelList:[{...basic}],
    no:1,
    date: "2024.07.28",
    memo: "메모"
},
];
const [List,setList] = useState(list);

const changeList = (newContent) => {
  let newList = List.map((content,idx)=>{return index===idx?newContent:content})
  setList(newList);
}
const addList = ()=>{
  let newList = [...List,{...basicList}];
  setList(newList);
}
  return (
  <StyledDiv>
  <Aside/>
  <MainWrapper>
   <Nav List={List} setIndex={setIndex} index={index} addList={addList}/>
   <Contents changeContent={changeList} content={List[index]} index={index}/>

  </MainWrapper>
  </StyledDiv>
  )
}

const StyledDiv = styled.div`
width:100%;
display: flex;
`;

export default List;

