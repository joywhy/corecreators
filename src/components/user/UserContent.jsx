import React, { useState, useEffect, useMemo } from 'react';
// import CampaignForm from '../common/CampaignForm.jsx';
import Button from '../common/Button';
import Dropdown from '../common/Dropdown';
import imgUploadUrl from '/src/assets/common/profileUpdate.svg';
import styled from 'styled-components';

import useWindowDimensions from '../../hooks/useWindowDimensions.jsx';
import useForm from '../../hooks/useForm.jsx';
import {
  responsiveWidthMiddle,
  userType,
  USER_STRUCTURE,
} from '../../constants/index.js';

import { useUser } from '../../store/useUser.js';
// import { getUserInfoCate } from '../../utils';
// import { CAMPAIGN_STRUCTURE } from '../../constants';

const UserContent = ({
  content,
  index,
  isCreatedReady,
  setIsCreatedReady,
  setIsOpenNav,
  setIndex,
}) => {
  const { setUser } = useUser();
  let initialValues = useMemo(
    () =>
      content.length === index
        ? {
            ...USER_STRUCTURE,
            // advertiser: basic.userNo === 1 ? '리을컴퍼니' : '광고주',
          }
        : {
            ...content[index],
            // advertiser: list[index]?.userNo === 1 ? '리을컴퍼니' : '광고주',
          },
    [content, index]
  );
  // console.log(initialValues);
  let { width } = useWindowDimensions();

  const handleBackCick = () => {
    setIsOpenNav(true);
  };

  const validateInput = () => {
    return {};
  };

  const handleSubmitUser = async () => {
    if (content.length === index) {
      setIsCreatedReady(true);

      await setUser(values);
      //   //전송
      setIndex(0);
      return;
    } else {
      //   changeList(values, index);
    }
  };

  useEffect(() => {
    changeNewForm(initialValues);
    return () => {};
  }, [index]);

  useEffect(() => {
    changeNewForm(initialValues);
    return () => {};
  }, [initialValues]);
  // const handleChange = () => {};
  // const handleBlur = () => {};
  let {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleChangeData,
    changeNewForm,
  } = useForm({
    initialValues,
    validate: validateInput,
    onSubmit: handleSubmitUser,
  });
  // console.log(values);
  return (
    <StyledDiv>
      {width < responsiveWidthMiddle && (
        <div className="back-button" onClick={handleBackCick}>
          <img src="/src/assets/common/back_icon.svg" alt="뒤로가기" />
          뒤로가기
        </div>
      )}
      <StyledForm onSubmit={handleSubmit}>
        <div className="wrapper">
          <Dropdown
            handleDropDown={(value) => {
              handleChangeData(value, 'cate');
            }}
            list={userType}
            value={values.cate}
          />
          <input
            name="mail"
            type="email"
            value={values.mail}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="id or example@email.com"
          />
        </div>
        <input
          name="pw"
          type="text"
          value={values.pw ? values.pw : ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="비밀번호"
        />
        <StyleButton>
          <img src={imgUploadUrl} alt="이미지 업로드" />
        </StyleButton>

        <input
          name="nick"
          type="text"
          value={values.nick ? values.nick : ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="닉네임 혹은 회사"
        />
        <input
          name="bno"
          type="text"
          value={values.bno ? values.bno : ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="사업자 번호"
        />
        <input
          name="name"
          type="text"
          value={values.name ? values.name : ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="이름"
        />
        <input
          name="tel"
          type="text"
          value={values.call ? values.call : ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="전화번호"
        />
        <textarea
          placeholder="메모"
          name="memo"
          value={!values.memo ? '' : values.memo}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
        <Button type="submit" className="text16">
          완료
        </Button>
      </StyledForm>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  flex-grow: 7;
  overflow: scroll;
  height: 100vh;

  @media only screen and (width <= 1200px) {
    & {
      height: calc(100vh - 70px);
      overflow: scroll;
    }
  }

  & .back-button {
    display: flex;
    align-items: center;
    padding: 10px 10px 0;
  }
`;

const StyledForm = styled.form`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  & .wrapper {
    width: 100%;
    display: flex;
  }

  & input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 17px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #f5f5f5;
    font-size: 14px;
    color: black;

    &:focus {
      outline: 2px solid var(--main-mint);
    }
  }

  & textarea {
    width: 100%;
    border: none;
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    background-color: #f5f5f5;
    margin: 10px 0;
    border-radius: 5px;
    height: 260px;

    &:focus {
      outline: 2px solid var(--main-mint);
    }
  }
`;

const StyleButton = styled.button`
  border: none;
  background-color: transparent;
  margin-bottom: 15px;
`;

export default UserContent;
