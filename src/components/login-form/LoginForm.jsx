import React,{ useState }from "react";
import Button from "../common/Button";

import styled from 'styled-components';


const validate = (values) => {
    const errors = {
      email: "",
      password: "",
    }
  
    if (!values.email) {
      errors.email = "이메일을 입력하세요"
    }
    if (!values.password) {
      errors.password = "비밀번호를 입력하세요"
    }
  
    return errors
}

  const LoginForm = ()=>{
    const [values, setValues] = useState({
      email: "",
      password: "",
    })
    const [errors, setErrors] = useState({
      email: "",
      password: "",
    })
  
    const handleChange = e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
      const errors = validate(values);
      setErrors(errors);
    }
  
    const handleSubmit = e => {
      e.preventDefault();

      const errors = validate(values);
      setErrors(errors);

      let isError =Object.values(errors).some(v => v);
  
      if (isError) {
        return
      }
  
    }
  
    return (
      <StyledForm onSubmit={handleSubmit}>
        <h1 className="text32">LOGIN</h1>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="  이메일을 입력하세요."
        />
         <span>{errors.email?errors.email:""}</span>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="  비밀번호를 입력하세요."
        />
        <span>{errors.password?errors.password:""}</span>
  
         <DetailSetting />

        <button type="submit" onClick={handleSubmit}   className="text16">로그인</button>
      </StyledForm>
    )
  }
   
const DetailSetting = () =>{
    
 return (
    <StyledDiv className="detailSettings" >
    <div className="check_wrap">
        <input type="checkbox" id="check_btn"/>
        <label htmlFor="check_btn"><span>로그인 상태 유지</span></label>
    </div>

     <a href="/relogin">
      비밀번호 재설정
     </a> 
   </StyledDiv>
)
}

 const StyledForm = styled.form`
 max-width: 400px;
 width: 100%;
 text-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;

 @media only screen and (max-width: 280px) {
    & {
      /* width: 100vw; */
    }
  }

 & >input:nth-of-type(1) {
   margin-top: 61px;
  
 }

 & >input {
 width: 100%;
 height: 56px;
 border-radius:12px;
 border: 1px solid var(--gray-20);
 font-size: 20px;

 @media only screen and (max-width: 400px) {
    & {
      width: 80%;
    }
  }
  &:focus {outline: 2px solid var(--main-red);}

 }
 
 & div.detailSettings {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 30px;
   width: 100%;

   @media only screen and (max-width: 400px) {
    & {
      width: 80%;
      font-size: 13px;
    }
  }

 }
 & span  {
 display: block;
 width: 100%;
 height: 20px;
 text-align: left;
 line-height: 20px;
 color: red;
 font-size: 13px;
 @media only screen and (max-width: 400px) {
    & {
      width: 80%;
      /* border: 1px solid rebeccapurple; */
    }
  }
 
}

&  button  {
    width: 100%;
    padding: 18px 0;
    border-radius: 5px;
    background: linear-gradient(to right,var(--main-red) , var(--gray-30), var(--main-mint));
   background-color: #000000a7;
    border: none;
    margin-top: 20px;
    color: var(--white);
    @media only screen and (max-width: 400px) {
    & {
      width: 80%;
    }
  }
    &:hover {
        background: var(--black);
    }
}

`;

const StyledDiv = styled.div`

& div {
   display: flex;
   flex-wrap: nowrap;
}
& span {
color: black;
}

& input#check_btn{
  display:none;
  }

 & input#check_btn + label{
  cursor:pointer;
  display: flex;
 }

& input#check_btn + label > span{
  vertical-align: middle;
  padding-left: 5px;
 }

/* label:before에 체크하기 전 상태 CSS */
& input#check_btn + label:before{
  content:"";
  display:inline-block;
  width:16px;
  height:13px;
  border:2px solid black;
  border-radius: 4px;
  vertical-align:middle;
  }
  
/* label:before에 체크 된 상태 CSS */  
& input#check_btn:checked + label:before{
  content:"";
  background-color:#F47C7C;
  border-color:#F47C7C;
  background-image: url('check_btn.png');
  background-repeat: no-repeat;
  background-position: 50%;
  border:2px solid black;
  }

`;


export default LoginForm;