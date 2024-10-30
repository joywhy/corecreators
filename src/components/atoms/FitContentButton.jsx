import React from 'react';
import Button from './Button';

import styled from 'styled-components';

const FitContentButton = ({ handleClick, children, ...props }) => {
  return (
    <StyledButton onClick={handleClick} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  padding: 10px 14px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => props.background || 'black'};
  width: ${(props) => props.width || 'auto'};
  border: none;
  color: white;

  &:hover {
    color: ${(props) => props.background || 'black'};
    background-color: ${(props) => props.color || 'white'};
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: none;
  }
`;

export default FitContentButton;
