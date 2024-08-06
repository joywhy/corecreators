import React from 'react';
import Logo from '../common/Logo.jsx';
import { navigateToPath, handleClickLogout } from '../../utils/index.js';
import { usehasManagerPermission } from '../../hooks/usehasManagerPermission.jsx';
import styled from 'styled-components';

const Aside = () => {
  let { isManager, userType } = usehasManagerPermission();
  let navList = [
    {
      title: '리스트업',
      path: '/list',
      iconUrl: 'list_icon.svg',
      iconActiveUrl: 'list_icon_active.svg',
    },
    {
      title: '보고서',
      path: '/report',
      iconUrl: 'report_icon.svg',
      iconActiveUrl: 'report_icon_active.svg',
    },
    {
      title: '크리에이터',
      path: '/sort',
      iconUrl: 'creators_icon.svg',
      iconActiveUrl: 'creators_icon_active.svg',
    },
    {
      title: '회원',
      path: '/adm/user',
      iconUrl: 'user_icon.svg',
      iconActiveUrl: 'user_icon_active.svg',
    },
    {
      title: '접속내역',
      path: '/adm/log',
      iconUrl: 'log_icon.svg',
      iconActiveUrl: 'log_icon_active.svg',
    },
  ];
  if (!isManager) {
    navList = navList.filter(
      (nav) => nav.title !== '회원' && nav.title !== '접속내역'
    );
  }

  return (
    <StyledAside>
      <nav>
        <ul>
          {navList.map((nav, idx) => {
            const isActive = location.pathname === nav.path;
            return (
              <Li {...nav} isActive={isActive} key={`${idx + nav.title}`} />
            );
          })}
        </ul>
      </nav>
    </StyledAside>
  );
};

const Li = ({ title, path, iconUrl, iconActiveUrl, isActive }) => {
  let imgUrl = `/src/assets/nav/${isActive ? iconActiveUrl : iconUrl}`;

  const handleClick = () => {
    navigateToPath(path);
  };
  return (
    <StyledLi className={isActive ? 'isActive' : ''} onClick={handleClick}>
      <img src={imgUrl} alt={`${title} 이미지`} />
    </StyledLi>
  );
};

const StyledAside = styled.aside`
  width: 100%;
  background-color: var(--black);
  height: 70px;
  & ul {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    box-sizing: border-box;
  }
`;

const StyledLi = styled.li`
  height: 50px;
  border-radius: 10px;
  padding-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.isActive {
    color: var(--red-20);
    background-color: var(--gray-70);
  }

  &:hover {
    background-color: var(--gray-50);
  }

  & img {
    margin-right: 12px;
    /* border: 1px solid red; */
  }
`;

export default Aside;
