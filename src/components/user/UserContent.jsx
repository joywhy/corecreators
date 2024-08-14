import React, { useState, useEffect } from 'react';
// import CampaignForm from '../common/CampaignForm.jsx';
import Button from '../common/Button';
import Dropdown from '../common/Dropdown';
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
          <Dropdown handleDropDown={() => {}} list={userType} value="거래처" />
          <input
            name="name"
            type="text"
            value={content.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="캠페인명"
          />
        </div>
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
export default UserContent;
