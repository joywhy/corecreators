import React,{ useState }from "react";
import Logo from "../components/common/Logo";
import styled from 'styled-components';

const Login = () => {
 
  return (
   <>
   <StyledDiv >
      <Logo src="src/assets/logo_white.svg"/>
   </StyledDiv>

   <StyledrightDiv>
      <LoginForm/>
   </StyledrightDiv>
   </>
  )
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
    // const errors = validate(values);
    setErrors(errors);
  }

  const handleSubmit = e => {
    e.preventDefault();
  
    if (Object.values(errors).some(v => v)) {
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
      {errors.email && <span>{errors.email}</span>}
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="  비밀번호를 입력하세요."
      />
       {errors.password && <span>{errors.password}</span>}

        <div >
        <input type="checkbox" id="remeber-me" name="remeber-me" defaultChecked />
        <label htmlFor="remeber-me">로그인 상태 유지</label>

       <a href="/relogin">
        비밀번호 재설정
       </a>
       </div>
       

      <button type="submit">로그인</button>
    </StyledForm>
  )
}
const validate = () => {
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

const StyledDiv = styled.div`
position: relative;
width: 50%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: black;

`;
const StyledrightDiv = styled(StyledDiv)`
position:absolute;
top:0;
left: 50%;
display: flex;
justify-content: center;
background-color: white;
`;
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
  margin-bottom: 11px;
  font-size: 20px;

  &:focus {outline: 1px solid var(  --main-red);} 
 }
 /* &  input[type=checkbox]  {
  width: 24px;
  border: 1px solid red;
 } */

 `;
export default Login;