import React, { useEffect } from 'react';
import Logo from '../common/Logo.jsx';
import { navigateToPath, handleClickLogout } from '../../utils/index.js';
import { useHasManagerPermission } from '../../hooks/useHasManagerPermission.jsx';
import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions.jsx';
import { useUserInfo } from '../../store/userInfoStore.js';
const Aside = () => {
  let isManager = window.localStorage.getItem('cate') === '최고관리자';
  let { height, width } = useWindowDimensions();
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
  const openConfirm = () => {
    const result = confirm('로그아웃 하시겠습니까?');
    if (result) {
      handleClickLogout();
    }
  };
  return (
    <StyledAside stye={{ height: height }}>
      <div>
        <Logo src="/src/assets/logo_white.svg" />
        <nav>
          <h1>NAVIGATION</h1>
          <ul>
            {navList.map((nav, idx) => {
              const isActive = location.pathname === nav.path;
              return (
                <Li {...nav} isActive={isActive} key={`${idx + nav.title}`} />
              );
            })}
          </ul>
        </nav>
      </div>
      <button onClick={openConfirm}>로그아웃</button>
    </StyledAside>
  );
};

const Li = ({ title, path, iconUrl, iconActiveUrl, isActive }) => {
  let imgUrl = `/src/assets/nav/${isActive ? iconActiveUrl : iconUrl}`;

  const handleClick = () => {
    navigateToPath(path);
  };
  return (
    <StyledLi className={isActive ? 'is-active' : ''} onClick={handleClick}>
      <img src={imgUrl} alt={`${title} 이미지`} />
      <p>{title}</p>
    </StyledLi>
  );
};

const StyledAside = styled.aside`
  max-width: 250px;
  width: 100%;
  background-color: var(--black);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;
  box-sizing: border-box;

  & a {
    margin-top: 80px;
    width: 80%;

    & img {
      width: 157px;
    }
  }

  & nav {
    margin-top: 80px;
    max-width: 220px;
    width: 100%;
    color: white;

    & h1 {
      font-size: 12px;
      font-weight: bold;
      height: 36px;
      line-height: 36px;
    }
  }

  & button {
    font-size: 16px;
    color: white;
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    padding: 16px;
    text-align: left;
  }
`;

const StyledLi = styled.li`
  max-width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding-left: 8px;

  &.is-active {
    color: var(--red-20);
    background-color: var(--gray-70);
  }

  &:hover {
    background-color: var(--gray-50);
  }

  & img {
    margin-right: 12px;
  }
`;

export default Aside;
