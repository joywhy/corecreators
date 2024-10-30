import React from 'react';
import FitContentButton from '../atoms/FitContentButton';
const LoginButton = () => {
  return (
    <FitContentButton onClick={() => navigate('login')}>
      로그인
    </FitContentButton>
  );
};

export default LoginButton;
