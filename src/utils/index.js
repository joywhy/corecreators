import { useNavigate } from 'react-router-dom';

export const navigateToPath = (path) => {
  location.href = path;
  // useNavigate(path)
  // const url =  location.origin + path;
  // history.pushState(null,null,url);
};

export const handleClickLogout = () => {
  window.localStorage.clear();
  location.reload(true);
  delete cookie.my;
  location.href = '/';
};

// 로그인체크 userInfo.no
// 권한체크 userInfo.cate
export const isLogin = () => {
  // let token = window.localStorage.getItem('no');
  return cookie.my ? true : false;
};
export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const hasManagerPermission = () => {
  return window.localStorage.getItem('cate') === '최고관리자';
};
