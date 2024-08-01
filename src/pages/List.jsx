import React,{useState} from "react";
import Aside from "../components/common/Aside.jsx";

import MainWrapper from '../components/common/MainWrapper.jsx'
import Nav from "../components/common/Nav.jsx"
import Contents from "../components/common/Contents.jsx"
import styled from 'styled-components';


const List = () => {
  const [index,setIndex] = useState(0);
  const List = [
    {
    name : "00캠페인",
    userNo: 2,
    creatorList: [
        {
      name: "@pattery_Ledner",
      cate: "콘텐츠 메이커",
      img :"",
       follower: "134,233",
       view: "15,344",
       percent :"80",
    },
    {
        name: "@pattery_Ledner",
        cate: "콘텐츠 메이커",
        img :"",
         follower: "134,233",
         view: "15,344",
         percent :"80",
      },
],
    no:1,
    date: "2024.07.27",
    memo: "00캠페인 메모"
},
{
    name : "**캠페인",
    userNo: 2,
    creatorList: [
        {
      name: "@pattery_Ledner",
      cate: "콘텐츠 메이커",
      img :"",
       follower: "134,233",
       view: "15,344",
       percent :"80",
    },
    {
        name: "@pattery_Ledner",
        cate: "콘텐츠 메이커",
        img :"",
         follower: "134,233",
         view: "15,344",
         percent :"80",
      },
],
    no:1,
    date: "2024.07.28",
    memo: "**캠페인 메모"
},
];
  return (
  <StyledDiv>
  <Aside/>
  <MainWrapper>
   <Nav List={List} setIndex={setIndex} index={index} />
   <Contents List={List} setIndex={setIndex} index={index}/>
  </MainWrapper>
  </StyledDiv>
  )
}

const StyledDiv = styled.div`
width:100%;
display: flex;
`;

export default List;

