import { useUserInfo } from '../store/userInfoStore';

export function usehasManagerPermission() {
  const { userInfo } = useUserInfo();
  let isManager =  userInfo.cate==="최고관리자";
  let userType =  userInfo.cate;
  // let advertiser = userType==="최고관리자"?"광고주":"";
    return {
      isManager,
      userType,

    }
  }