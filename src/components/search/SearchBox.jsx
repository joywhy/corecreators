import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import styled from 'styled-components';

export const SearchBox = ({ value, setValue, handleSubmit }) => {
  let { width } = useWindowDimensions();
  let placeholder =
    width < 400
      ? '아이디 또는 이름을 입력해보세요!'
      : '   크리에이터의  아이디 또는 이름을 입력해보세요!';
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <StyleDiv>
      <StyleInput />
      <input
        className="realInput"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
      />
      <StyleButton onClick={handleSubmit}>
        <img src="/src/assets/common/search_blue.svg" alt="검색" />
      </StyleButton>
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  position: relative;
  width: 447px;
  box-sizing: border-box;
  margin-top: 74px;

  @media only screen and (width <= 500px) {
    & {
      width: 80%;
      box-sizing: border-box;
    }
  }

  & input.realInput {
    position: absolute;
    top: 2px;
    left: 20px;
    border: none;
    height: 80%;
    width: 100%;
    background-color: transparent;

    @media only screen and (width <= 450px) {
      &::placeholder {
        font-size: 11px;
      }
    }

    &::placeholder {
      color: #fe5c5a;
    }

    &:focus {
      outline: none;
    }
  }
`;

const StyleInput = styled.input`
  box-sizing: border-box;
  width: 447px;
  height: 45px;
  border-radius: 30px;
  border: 2px solid transparent;
  background-image: linear-gradient(#fcfcfc, #fcfcfc),
    linear-gradient(to right, #fe5c5a 0%, #63fbf4 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;

  /* padding-left: 20px; */
  @media only screen and (width <= 500px) {
    & {
      width: 100%;
      box-sizing: border-box;
    }
  }

  &::placeholder {
    color: #fe5c5a;
  }

  &:focus {
    outline: none;
    box-shadow: 0 1px 10px rgb(0 0 0 / 5.2%), 0 1px 10px rgb(0 0 0 / 10%);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

const StyleButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  background-color: transparent;
  border: none;
`;
