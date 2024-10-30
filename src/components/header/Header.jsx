import { useNavigate } from 'react-router-dom';

import LoginButton from '../molecules/LoginButton.jsx';
import Button from '../common/Button.jsx';
import Logo from '../common/Logo.jsx';

import { useUserInfo } from '../../store/userInfoStore.js';

import img from '/src/assets/logo.svg';
import styled from 'styled-components';

const Header = ({ isLogin }) => {
  const { userInfo, rememberUser } = useUserInfo();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Logo src={img} />
      {isLogin ? <LogindHeader name={userInfo.name} /> : <LoginButton />}
    </StyledHeader>
  );
};

const LogindHeader = ({ name }) => {
  const openConfirm = () => {
    const result = confirm('로그아웃 하시겠습니까?');
    if (result) {
      delete cookie.my;
      location.reload(true);
    }
  };
  return (
    <div className="rightside">
      <span>{`${name}님`}</span>
      <Button type="logout" primary onClick={openConfirm}>
        로그아웃
      </Button>
    </div>
  );
};
const StyledHeader = styled.header`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  max-width: var(--home-max-width);
  width: 80%;
  height: auto;
  margin-top: 5rem;

  & .rightside span {
    margin-right: 20px;
  }
`;

export default Header;
