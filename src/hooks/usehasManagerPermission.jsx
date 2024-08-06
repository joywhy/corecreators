import React from 'react';
import { useUserInfo } from '../store/userInfoStore';

export const useHasManagerPermission = () => {
  const { userInfo } = useUserInfo();
  let isManager = userInfo.cate === '최고관리자';
  let userType = userInfo.cate;
  let advertiser = userType === '최고관리자' ? '광고주' : '';
  return {
    isManager,
    userType,
    advertiser,
  };
};
