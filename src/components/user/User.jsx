import React, { useState, useEffect } from 'react';
import NavUser from './NavUser';
import UserContent from './UserContent';

import { useUser } from '../../store/useUser';
import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { responsiveWidthMiddle, responsiveWidth } from '../../constants/index';
//가데이터
// const users = [
//   {
//     no: 1, // 계정 고유 번호
//     profileImg: '/src/assets/common/defaultProfile.svg',
//     nick: '닉네임', // 닉네임 or 회사명
//     name: '문상협', // 이름
//     tel: '01012345678', // 연락처
//     cate: '최고 관리자', // 분류
//     mail: 'admin@gmail.com', // 메일
//     bno: '183-42-00547', // 사업자번호
//     memo: '문상협님에 대한 메모', // 메모
//     date: '2024.04.21', // 등록일일
//   },
//   {
//     no: 2, // 계정 고유 번호
//     profileImg: '/src/assets/common/defaultProfile.svg',
//     nick: '닉네임2', // 닉네임 or 회사명
//     name: '문상협2', // 이름
//     tel: '01012334444', // 연락처
//     cate: '거래처', // 분류
//     mail: 'admin2@gmail.com', // 메일
//     bno: '183-42-00547', // 사업자번호
//     memo: '문상협2님에 대한 메모', // 메모
//     date: '2024.04.22', // 등록일일
//   },
//   {
//     no: 3, // 계정 고유 번호
//     profileImg: '/src/assets/common/defaultProfile.svg',
//     nick: '닉네임3', // 닉네임 or 회사명
//     name: '일반 사용자', // 이름
//     tel: '01012334444', // 연락처
//     cate: '일반', // 분류
//     mail: 'admin2@gmail.com', // 메일
//     bno: '183-42-00547', // 사업자번호
//     memo: '일반사용자님에 대한 메모', // 메모
//     date: '2024.04.25', // 등록일일
//   },
// ];
const User = () => {
  const [index, setIndex] = useState(0);

  const { users, getUser, getUserNo, getUserNoList } = useUser();
  const [isCreatedReady, setIsCreatedReady] = useState(true);
  const [isOpenNav, setIsOpenNav] = useState(true);

  let { width } = useWindowDimensions();
  useEffect(() => {
    const fun = async () => {
      getUser(30);
    };
    fun();
  }, []);
  const searchList = () => {};
  const deleteList = () => {};
  const changeList = () => {};
  return (
    <StyledDiv>
      {width > responsiveWidthMiddle && (
        <NavUser
          title="회원"
          setIndex={setIndex}
          index={index}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
          list={users}
          searchList={searchList}
          deleteList={deleteList}
          isOpenNav={isOpenNav}
          setIsOpenNav={setIsOpenNav}
          //   userNoList={userNoList}
          //   userNo={userNo}
        />
      )}
      {width <= responsiveWidthMiddle && isOpenNav && (
        <NavUser
          style={{ width: '100vw' }}
          title="회원"
          setIndex={setIndex}
          index={index}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
          list={users}
          searchList={searchList}
          deleteList={deleteList}
          isOpenNav={isOpenNav}
          setIsOpenNav={setIsOpenNav}
          //   userNoList={userNoList}
          //   userNo={userNo}
        />
      )}
      {width <= responsiveWidthMiddle && !isOpenNav && (
        <UserContent
          changeContent={changeList}
          content={users}
          index={index}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
          setIsOpenNav={setIsOpenNav}
          setIndex={setIndex}
        />
      )}
      {width >= responsiveWidthMiddle && (
        <UserContent
          changeContent={changeList}
          content={users}
          index={index}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
          setIsOpenNav={setIsOpenNav}
          setIndex={setIndex}
        />
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
`;
export default User;
