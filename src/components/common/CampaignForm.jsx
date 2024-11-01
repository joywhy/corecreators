import React, { useEffect, useMemo } from 'react';
import Button from './Button';
import ChannelList from '../channelList/ChannelList.jsx';

import { useCampaign } from '../../store/useCampaign.js';
import useForm from '../../hooks/useForm.jsx';
import { CAMPAIGN_STRUCTURE } from '../../constants';
import styled from 'styled-components';

const CampaignForm = ({ index, setIsCreatedReady, isCreatedReady }) => {
  //삭제해서 한 상태값을 렌더링해야함
  const { campaign, changeList, setList } = useCampaign();
  // console.log(campaign);
  let initialValues = useMemo(
    () =>
      campaign.length === index
        ? {
            ...CAMPAIGN_STRUCTURE,
            advertiser:
              CAMPAIGN_STRUCTURE.userNo === 1 ? '리을컴퍼니' : '광고주',
          }
        : {
            ...campaign[index],
            advertiser: campaign[index].userNo === 1 ? '리을컴퍼니' : '광고주',
          },
    [campaign, index]
  );
  const handleSubmitCampaign = () => {
    if (campaign.length === index) {
      setIsCreatedReady(true);
      setList(values);
      //전송
      return;
    }
    changeList(values, index);
    // 전송
  };
  const validateCampaignInput = () => {
    return {};
  };

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
    validate: validateCampaignInput,
    onSubmit: handleSubmitCampaign,
  });

  useEffect(() => {
    changeNewForm(initialValues);
    return () => {};
  }, [index]);

  useEffect(() => {
    changeNewForm(initialValues);
    return () => {};
  }, [initialValues]);

  const changeChannelList = (newList) => {
    handleChangeData(newList, 'channelList');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="캠페인명"
      />
      <input
        type="text"
        name="advertiser"
        value={values.advertiser}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="@광고주"
      />
      <ChannelList changeList={changeChannelList} list={values.channelList} />
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
  );
};

const StyledForm = styled.form`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  & > input {
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

export default CampaignForm;
