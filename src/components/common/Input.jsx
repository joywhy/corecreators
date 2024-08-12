import React from 'react';
import styled from 'styled-components';
const Input = ({ placeHolder = 'Search...', value, handleChange }) => {
  return (
    <StyledInput
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 35px;
  border-radius: 5px;
  background-color: #d1d1d1;
  border: none;

  &:focus {
    outline: 2px solid var(--main-red);
  }
`;
export default Input;
