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
    <div>
      <input type="checkbox" id="remeber-me" name="remeber-me" defaultChecked />
      <label htmlFor="remeber-me">로그인 상태 유지</label>
    </div>

     <a href="/relogin">
      비밀번호 재설정
     </a> 
   </StyledDiv>
)
}

 const StyledForm = styled.form`
 width: 400px;
 text-align: center;

 & >input:nth-of-type(1) {
   margin-top: 61px;
 }

 & >input {
 width: 100%;
 height: 56px;
 border-radius:12px;
 border: 1px solid var(--gray-20);
 font-size: 20px;

    &:focus {outline: 1px solid var(--main-mint);} 
 }
 
 & div.detailSettings {
   display:  flex;
   justify-content: space-between;
   align-items: center;
   height: 30px;
 }
 & span  {
 display: block;
 width: 100%;
 height: 20px;
 text-align: left;
 line-height: 20px;
 color: red;
 font-size: 13px;
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

    &:hover {
        background: var(--black);
    }
}

`;

const StyledDiv = styled.div`

`;


export default LoginForm;