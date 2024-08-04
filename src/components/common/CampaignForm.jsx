import React,{useState,useEffect} from "react";
import Button from "./Button";
import ChannelList from "../channelList/ChannelList.jsx";
import styled from 'styled-components';
let basic = {
  channelType:"instargram",
 channel:""
};

const CampaignForm = ({name="",advertiser="",memo="",channelList=[{  channelType:"instargram",
  channel:""}],content="",changeContent})=>{

    const handleChange = (e) => {
      changeContent({
        ...content,
        [e.target.name]: e.target.value,
      })
    }
   const changeList = (newList)=>{
    changeContent({ ...content,"channelList":newList})
   }
   const changeMemo = (e)=>{
    changeContent({ ...content,"memo":e.target.value})
   }
    const handleSubmit =  e => {
      e.preventDefault();
    }
    return (<StyledForm onSubmit={handleSubmit}>
      
           <input name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="캠페인명"
          />
           <input type="text"
            name="advertiser"
            value={advertiser}
            onChange={handleChange}
            placeholder="@광고주"
          />
          <ChannelList changeList={(newList)=>changeList(newList)} list={channelList}/>
          <textarea placeholder="메모" value={memo}  onChange={changeMemo}></textarea>
           <Button type="submit"   className="text16" >완료</Button>
        
    </StyledForm>
    
    );
  }

const StyledForm = styled.form`
position: relative
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
box-sizing: border-box;

& >input {
 width: 100%;
 height: 40px;
 border-radius:5px;
 border: none;
 font-size: 20px;
 margin-bottom: 17px;
 padding: 0 10px;
 box-sizing: border-box;
 background-color: #F5F5F5;
 font-size: 14px;
color: black;
  &:focus {outline: 2px solid var(--main-mint);}
 }
 & textarea {
    width: 100%;
    border: none;
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    background-color: #F5F5F5;
    margin:10px 0;
    border-radius: 5px;
     height: 260px;
    &:focus {outline: 2px solid var(--main-mint);}
  
}
`;

export default CampaignForm;