import React,{useState} from "react";

import styled from 'styled-components';

const CampaignForm = ({name="",advertiser=""})=>{
    const [values, setValues] = useState({
      name: name,
      advertiser: advertiser,
      channelList:[],
      memo:""
    })
    // const [errors, setErrors] = useState({
    //   email: "",
    //   password: "",
    // })
    const handleChange = e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
      // const errors = validate(values);
      // setErrors(errors);
    }
  
    const handleSubmit =  e => {
      e.preventDefault();
    }
    return (<StyledForm onSubmit={handleSubmit}>
      
     <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="캠페인명"
          />
           <input
            type="text"
            name="advertiser"
            value={values.advertiser}
            onChange={handleChange}
            placeholder="@광고주"
          />
          <h3>채널 리스트</h3>
          <ul>
            
          </ul>
           <button type="submit"   className="text16" >완료</button>
    
    </StyledForm>
    
    );
  }

const Channel = ()=>{

    const ChannelType = [{
        name :"인스타그램",
        type:"instargram",
        ImgUrl : "/src/assets/channel/instargram_icon.svg"
    },
    {
        name :"유튜브",
        type:"youtube",
        ImgUrl : "/src/assets/channel/youtube_icon.svg"
    },
    {
        name :"틱톡",
        type:"tikkok",
        ImgUrl : "src/assets/channel/tikkok_icon.svg"
    },
];
return (
<StyleChannerl>


</StyleChannerl>
);    
}

const StyledForm = styled.form`
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
box-sizing: border-box;
border:1px solid red;

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
 & h3 {
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin-top: 17px;
 }
`;

const StyleChannerl = styled.li`

`;
export default CampaignForm;