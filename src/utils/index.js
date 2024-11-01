export const navigateToPath = (path) => {
  location.href = path;
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
  return cookie.my ? true : false;
};
export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const hasManagerPermission = () => {
  return window.localStorage.getItem('cate') === '최고관리자';
};
export const getUserInfoNo = () => {
  return window.localStorage.getItem('no');
};
export const getUserInfoCate = () => {
  return window.localStorage.getItem('cate');
};
export const validateLoginInput = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = '이메일이 입력되지 않았습니다.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = '입력된 이메일이 유효하지 않습니다.';
  }
  if (!password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  } else if (password.length < 8) {
    errors.password = '8자 이상의 패스워드를 사용해야 합니다.';
  }

  return errors;
};
