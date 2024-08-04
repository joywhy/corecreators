import React,{useState} from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { ChannelType } from "../../constants";
import ChannelList from "../channelList/ChannelList.jsx";
import styled from 'styled-components';

const CampaignForm = ({name="",advertiser=""})=>{
  let basic = {
    channelType:"instargram",
   channel:""
};

    const [values, setValues] = useState({
      name: name,
      advertiser: advertiser,
      channelList:[{...basic}],
      memo:""
    })
    console.log(values.channelList);
    const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    }
   const changeList = (newList)=>{
    setValues({ ...values,"channelList":newList})
   }
    const handleSubmit =  e => {
      e.preventDefault();
    }
    return (<StyledForm onSubmit={handleSubmit}>
      
           <input name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="캠페인명"
          />
           <input type="text"
            name="advertiser"
            value={values.advertiser}
            onChange={handleChange}
            placeholder="@광고주"
          />
          <ChannelList changeList={(newList)=>changeList(newList)} list={values.channelList}/>
          <textarea placeholder="메모"></textarea>
           <Button type="submit"   className="text16" >완료</Button>
        
    </StyledForm>
    
    );
  }

// const Channel = ()=>{
// const [value, setValue] = useState({
//   channelType:"instargram",
//   channel:""
// });
// const handleChange = e => {
//   setValue({
//     ...value,
//     [e.target.name]: e.target.value,
//   })
//   // const errors = validate(values);
//   // setErrors(errors);
// }
// // console.log(value);
// return (
// <StyleChannerl>
//   <Dropdown list={ChannelType} setValue={setValue} value={value}/>
//   <input type="text" name="channel" placeholder="채널"     value={value.channel} onChange={handleChange}/>
//   <img  className="delete" src="src/assets/common/delete_icon.svg" alt="채널 삭제 아이콘" />
// </StyleChannerl>
// );    
// }

const StyledForm = styled.form`
position: relative
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
box-sizing: border-box;
/* border:1px solid red; */

& >input {
 width: 100%;
 height: 40px;
 border-radius:5px;
 border: none;
 font-size: 20px;
 margin-bottom: 14px;
 padding: 0 10px;
 box-sizing: border-box;
 background-color: #F5F5F5;
 font-size: 14px;
color: black;
  &:focus {outline: 2px solid var(--main-mint);}
 }
 /* & h3 {
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin-top: 17px;
 } */
 & textarea {
    width: 100%;
    /* height: 100%; */
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

const StyleChannerl = styled.li`
/* border:1px solid red ; */
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
export default CampaignForm;