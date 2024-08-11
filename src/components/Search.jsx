import React from 'react';
// import Input from '../components/common/Input';
import styled from 'styled-components';
const Search = () => {
  const value = '.';
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <StyleDiv>
      <h1>
        관심있는 크리에이터들을 <br /> 검색해보세요
      </h1>
      <p>원하는 분야의 크리에이터들을 모아볼 수 있어요. 😉</p>
      {/* <Input
        placeHolder="크리에이터의 아이디 또는 이름을 입력해보세요!"
        value={value}
        handleChange={handleChange}
      /> */}
      {/* <button>Search</button> */}
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid red; */

  & h1 {
    font-size: 32px;
    font-weight: bold;
    margin-top: 100px;
    text-align: center;
  }

  & p {
    margin-top: 31px;
    font-size: 16px;
    color: #5d5d5d;
  }
`;
export default Search;
