import React, { useState, useEffect } from 'react';
// import CampaignForm from '../common/CampaignForm.jsx';
import Button from '../common/Button';
import Dropdown from '../common/Dropdown';
import imgUploadUrl from '/src/assets/common/profileUpdate.svg';
import styled from 'styled-components';

import useWindowDimensions from '../../hooks/useWindowDimensions.jsx';
import { responsiveWidthMiddle, userType } from '../../constants/index.js';

// import { useCampaign } from '../../store/useCampaign.js';
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
  //   const { campaign, changeList, setList } = useCampaign();
  let { width } = useWindowDimensions();

  const handleBackCick = () => {
    setIsOpenNav(true);
  };

  const validateInput = () => {
    return {};
  };

  const handleSubmit = async () => {
    if (list.length === index) {
      setIsCreatedReady(true);

      //   await setList(values);
      //   //전송
      //   setIndex(0);
      return;
    } else {
      //   changeList(values, index);
    }
  };

  useEffect(() => {
    // changeNewForm(initialValues);
    return () => {};
  }, [index]);

  //   useEffect(() => {
  //      changeNewForm(initialValues);
  //     return () => {};
  //   }, [initialValues]);

  const handleChange = () => {};
  const handleBlur = () => {};
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
            handleDropDown={() => {}}
            list={userType}
            value="최고 관리자"
          />
          <input
            name="mail"
            type="email"
            value={content.mail}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="id or example@email.com"
          />
        </div>
        <input
          name="password"
          type="text"
          value={content.password ? content.password : null}
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
          value={content.nick ? content.nick : null}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="닉네임 혹은 회사"
        />
        <input
          name="bno"
          type="text"
          value={content.bno ? content.bno : null}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="사업자 번호"
        />
        <input
          name="name"
          type="text"
          value={content.name ? content.name : null}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="이름"
        />
        <input
          name="call"
          type="text"
          value={content.call ? content.call : null}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="전화번호"
        />
        <textarea
          placeholder="메모"
          name="memo"
          value={!content.memo ? '' : content.memo}
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
