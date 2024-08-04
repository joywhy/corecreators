import React,{useState} from "react";
import Dropdown from "../common/Dropdown";
import { ChannelType } from "../../constants";
import styled from 'styled-components';

const ChannelList = ({changeList,list}) => {
    let basic = {
         channelType:"instargram",
        channel:""
    };
  const changeChannelType =  (item,idx) => {
    let newList = list.map((chan,index)=>{
        return(index===idx)?{...chan,"channelType": item}: chan});
        console.log(newList);
        changeList(newList);
    }
    const changeChannel =  (item,idx) => {
        let newList = list.map((chan,index)=>{
            return(index===idx)?{...chan,"channel": item}: chan});
            changeList(newList);
        }

    const addChannel = () => {
        let newList = [...list,{...basic}];
        changeList(newList);  
    }
    const deleteChannel = (idx) => {
        changeList(list.filter((_, index) => index!==idx));
    }
    return (
         <>
         <StyleTitle>
         <h3>채널 리스트</h3>
         <div onClick ={addChannel}>
          <img src="/src/assets/common/cross_icon.svg" alt="추가"/>
          </div>
         </StyleTitle>

        <StyleUl >
            {list.map((channel,idx)=>
            <Channel changeChannel={(newChannel)=>{changeChannel(newChannel,idx)}}
             changeType={(newChannel)=>{changeChannelType(newChannel,idx)}}
              value={channel} 
              deleteChannel={()=>deleteChannel(idx)}
               key={idx+"channel"}  
                idx={idx}
                />
                )}
             
        </StyleUl>
        </>
    ); 
};
const Channel = ({changeType,changeChannel,value,deleteChannel,idx})=>{

    return (
    <StyleChannerl>
      <Dropdown handleDropDown={(newType)=>changeType(newType)} list={ChannelType}  type={value.ChannelType}  value={value.channelType} />
      <input type="text" name="channelType" placeholder="채널"     value={value.channel} onChange={(e)=>changeChannel(e.target.value)}/>
     {idx!==0?
      <img  className="delete" src="src/assets/common/delete_icon.svg" alt="채널 삭제 아이콘" onClick={deleteChannel}/>
      : <img style={{visibility:"hidden"}} className="delete" src="src/assets/common/delete_icon.svg" alt="채널 삭제 아이콘" onClick={deleteChannel}/>
      } </StyleChannerl>
    );    
    }
const StyleTitle = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    & h3 {
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  line-height:100%;
 }
    `;
const StyleUl = styled.ul`
position: relative;
width: 100%;
`;
const StyleChannerl = styled.li`
width: 100%;
height: 40px;
margin-top:10px;
display: flex;
align-items: center;
& input  {
    margin-left:10px;
    flex-grow: 1;
    border: none;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #F5F5F5;
    font-size: 14px;
    color: black;
    border-radius:5px;
    &:focus {outline: 2px solid var(--main-mint);}
}
& img.delete {
    height: 5px;
    padding:0 10px;
}

`;

export default ChannelList;

