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
  location.href = '/';
};

export const isLogin = () => {
  let token = window.localStorage.getItem('token');
  return token ? true : false;
};
export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};
