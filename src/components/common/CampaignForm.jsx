import React from 'react';
import Button from './Button';
import ChannelList from '../channelList/ChannelList.jsx';
// import { useUserInfo } from '../../store/userInfoStore.js';

import { useCampaign } from '../../store/useCampaign.js';
import useForm from '../../hooks/useForm.jsx';
import styled from 'styled-components';

const CampaignForm = ({ index }) => {
  // const
  const { loading, campaign, error } = useCampaign();
  let advertiser = campaign[index].userNo === 1 ? '리을컴퍼니' : '광고주';
  const handleSubmitCampaign = () => {};
  const validateCampaignInput = () => {};

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleChangeData,
  } = useForm({
    initialValues: { ...campaign[index], advertiser: advertiser },
    validate: validateCampaignInput,
    onSubmit: handleSubmitCampaign,
  });
  console.log(values);
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
        placeholder="캠페인명"
      />
      <input
        type="text"
        name="advertiser"
        value={values.advertiser}
        onChange={handleChange}
        placeholder="@광고주"
      />
      <ChannelList changeList={changeChannelList} list={values.channelList} />
      <textarea
        placeholder="메모"
        name="memo"
        value={!values.memo ? '' : values.memo}
        onChange={handleChange}
      ></textarea>
      <Button type="submit" className="text16">
        완료
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
position: relative
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
box-sizing: border-box;

& >input {
 width: 100%;
 height: 40px;
 border-radius:5px;
 border: none;
 font-size: 20px;
 margin-bottom: 17px;
 padding: 0 10px;
 box-sizing: border-box;
 background-color: #F5F5F5;
 font-size: 14px;
color: black;
  &:focus {outline: 2px solid var(--main-mint);}
 }
 & textarea {
    width: 100%;
    border: none;
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    background-color: #F5F5F5;
    margin:10px 0;
    border-radius: 5px;
     height: 260px;
    &:focus {outline: 2px solid var(--main-mint);}
  
}
`;

export default CampaignForm;
