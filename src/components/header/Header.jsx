import { useEffect } from 'react';
import Button from '../common/Button';
import Logo from '../common/Logo.jsx';
import { useUserInfo } from '../../store/userInfoStore.js';

import styled from 'styled-components';

const Header = ({ isLogin }) => {
  const { userInfo, rememberUser } = useUserInfo();

  useEffect(() => {
    rememberUser();
  }, []);

  const navigateToLogin = () => {
    location.href = '/login';
  };
  return (
    <StyledHeader>
      <Logo src="src/assets/logo.svg" />
      {isLogin ? (
        <LogindHeader name={userInfo.name} />
      ) : (
        <Button type="login" primary onClick={navigateToLogin}>
          로그인
        </Button>
      )}
    </StyledHeader>
  );
};

const LogindHeader = ({ name }) => {
  return (
    <div className="rightside">
      <span>{`${name}님`}</span>
      <Button type="logout" primary>
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
  height: 258px;
  padding-bottom: 17px;
  & .rightside span {
    margin-right: 20px;
  }
`;

export default Header;
