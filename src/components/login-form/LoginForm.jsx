import { useState, useCallback, useEffect } from 'react';

import { useUserInfo } from '../../store/userInfoStore';
import { navigateToPath } from '../../utils';

import styled from 'styled-components';

const LoginForm = () => {
  const { userInfo, error, sendLoginRequest, loading } = useUserInfo();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    const errors = validate(values);
    setErrors(errors);
  };
  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      email: true,
      password: true,
    });

    const errors = validate(values);
    setErrors(errors);

    let Isincorrectly = Object.values(errors).some((v) => v);

    if (Isincorrectly) {
      return;
    }

    sendLoginRequest(values);
    if (!error) {
      alert('아이디가 존재하지 않거나 비밀번호가 잘못되었습니다.');
    } else {
      navigateToPath('/');
    }
  };

  const validate = useCallback(() => {
    const errors = {
      email: '',
      password: '',
    };

    if (!values.email) {
      errors.email = '이메일을 입력하세요';
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력하세요';
    }
    return errors;
  }, [values]);

  useEffect(() => {
    validate();
  }, [values]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1 className="text32">LOGIN</h1>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="이메일"
      />
      {touched.email && errors.email && <span>{errors.email}</span>}
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="비밀번호"
      />
      {touched.password && errors.password && <span>{errors.password}</span>}

      <DetailSetting />
      <button type="submit" className="text16">
        로그인
      </button>
    </StyledForm>
  );
};

const DetailSetting = () => {
  return (
    <StyledDiv className="detailSettings">
      <div className="check_wrap">
        <input type="checkbox" id="check_btn" />
        <label htmlFor="check_btn">
          <span>로그인 상태 유지</span>
        </label>
      </div>

      <a href="/relogin" className="text13">
        비밀번호 재설정
      </a>
    </StyledDiv>
  );
};

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

const StyledDiv = styled.div`
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

export default LoginForm;
