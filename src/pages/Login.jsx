import React from 'react';
import Logo from '../components/common/Logo';
import useForm from '../hooks/useForm';
import { useUserInfo } from '../store/userInfoStore';
import { validateLoginInput, navigateToPath } from '../utils/index';

import styled from 'styled-components';

const Login = () => {
  const email = 'corecreators.korea@gmail.com';
  const des =
    '코어 크리에이터스 솔루션 접속 문의는 공식 메일로 해주시기 바랍니다. ';

  return (
    <>
      <StyledDiv>
        <Logo src="src/assets/logo_white.svg" />
      </StyledDiv>

      <StyledrightDiv>
        <h1 className="text32">LOGIN</h1>
        <LoginForm />
        <p className="text13">{des}</p>
        <p>{email}</p>
      </StyledrightDiv>
    </>
  );
};

const LoginForm = () => {
  const { error, sendLoginRequest } = useUserInfo();
  const initialValues = { email: '', password: '' };
  const handleSubmitLogin = async () => {
    await sendLoginRequest(values);

    if (error) {
      alert('아이디가 존재하지 않거나 비밀번호가 잘못되었습니다.');
    } else {
      navigateToPath('/');
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useForm({
      initialValues,
      validate: validateLoginInput,
      onSubmit: handleSubmitLogin,
    });

  return (
    <StyledForm>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="이메일"
      />
      {errors.email && touched.email && <span>{errors.email}</span>}

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="비밀번호"
      />
      {errors.password && touched.password && <span>{errors.password}</span>}
      <DetailSetting />
      <button type="submit" onClick={handleSubmit}>
        로그인
      </button>
    </StyledForm>
  );
};

const DetailSetting = () => {
  return (
    <StyledDIv className="detailSettings">
      <div className="check_wrap">
        <input type="checkbox" id="check_btn" />
        <label htmlFor="check_btn">
          <span>로그인 상태 유지</span>
        </label>
      </div>

      <a href="/relogin" className="text13">
        비밀번호 재설정
      </a>
    </StyledDIv>
  );
};

const StyledDiv = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  @media only screen and (max-width: 800px) {
    & {
      width: 100vw;
      height: calc(100vh * 0.3);
    }
    & img {
      width: 50%;
    }
  }
  @media only screen and (max-width: 280px) {
    & {
      width: 100vw;
      height: calc(100vh * 0.3);
    }
  }
`;

const StyledrightDiv = styled(StyledDiv)`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    & {
      position: absolute;
      margin-top: 300px;
      box-sizing: border-box;
      width: 100%;
      height: calc(100vh * 0.7);
      top: 0;
      left: 0;
      justify-content: start;
      padding-top: 30px;
    }
  }

  & p {
    margin-top: 20px;
    text-align: center;
    @media only screen and (max-width: 400px) {
      & {
        width: 80%;
      }
    }
  }
  & p:nth-of-type(1) {
    margin-top: 79px;
  }
`;
const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input:nth-of-type(1) {
    margin-top: 61px;
  }

  & > input {
    width: 100%;
    height: 56px;
    border-radius: 12px;
    border: 1px solid var(--gray-20);
    font-size: 20px;
    margin-bottom: 14px;
    padding: 0 20px;
    box-sizing: border-box;

    @media only screen and (max-width: 400px) {
      & {
        width: 80%;
      }
    }
    &:focus {
      outline: 2px solid var(--main-red);
    }
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
  & span {
    position: relative;
    top: -5px;
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
      }
    }
  }

  & button {
    width: 100%;
    padding: 18px 0;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      var(--main-red),
      var(--gray-30),
      var(--main-mint)
    );
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

const StyledDIv = styled.div`
  & div {
    display: flex;
    flex-wrap: nowrap;
  }
  & span {
    color: var(--black);
  }

  & input#check_btn {
    display: none;
  }

  & input#check_btn + label {
    cursor: pointer;
    display: flex;
  }

  & input#check_btn + label > span {
    padding-left: 5px;
    display: block;
    position: relative;
    top: -1px;
  }

  /* label:before에 체크하기 전 */
  & input#check_btn + label:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 13px;
    border: 1px solid var(--gray-20);
    border-radius: 4px;
    vertical-align: middle;
  }

  /* label:before에 체크 후*/
  & input#check_btn:checked + label:before {
    content: '';
    background-color: #ff5d5a;
    border-color: #ff5d5a;
    background-image: url('check_btn.png');
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;

export default Login;
