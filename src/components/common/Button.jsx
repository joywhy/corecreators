import styled, { css } from 'styled-components';

const Button = ({ onClick, type, children, primary, ...props }) => {
  const handleClick = onClick ? onClick : convertClick(type);

  return (
    <StyledButton onClick={handleClick} {...props}>
      {children}
    </StyledButton>
  );
};

function convertClick(type) {
  switch (type) {
    case 'login':
      return handleClickLogin;
    case 'logout':
      return handleClickLogout;

    default:
  }
}

const handleClickLogin = () => {
  location.href = '/login';
};
const handleClickLogout = () => {
  delete cookie.my;
  location.reload(true);
};

const StyledButton = styled.button`
  padding: 8px 20px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.color || 'white'};
  background: ${(props) => props.background || 'black'};
  width: ${(props) => props.width || 'auto'};
  border: none;

  &:hover {
    color: ${(props) => props.background || 'black'};
    background: ${(props) => props.color || 'white'};
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: none;
  }

  ${(props) =>
    props.primary &&
    css`
      height: auto;
      color: white;
      background-color: black;

      &:hover {
        color: black;
        background-color: white;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: linear-gradient(to right, #ec6e6c, #897c77, #7fe5e0);
    `}

   ${(props) =>
    props.tertiary &&
    css`
      color: var(--black);
      background-color: white;
      border: 1px solid var(--gray-10);
      margin: 0;
      display: flex;

      /* align-item: center; */
    `}

    ${(props) =>
    props.quaternary &&
    css`
      color: white;
    `}
`;

export default Button;
