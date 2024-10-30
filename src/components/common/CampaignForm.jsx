import React, { useEffect, useMemo } from 'react';
import Button from './Button';
import ChannelList from '../channelList/ChannelList.jsx';

import useForm from '../../hooks/useForm.jsx';
// import { USER_STRUCTURE } from '../../constants';
import styled from 'styled-components';
// listup  form  이랑 report form
const CampaignForm = ({
  index,
  setIsCreatedReady,
  isCreatedReady,
  list,
  changeList,
  setList,
  basic,
  setIndex,
  userNo,
}) => {
  let initialValues = useMemo(
    () =>
      list.length === index
        ? {
            ...basic,
            advertiser: '',
          }
        : {
            ...list[index],
            advertiser: userNo,
          },
    [list, index]
  );
  // console.log(initialValues);
  const validateInput = () => {
    return {};
  };
  const handleSubmitCampaign = async () => {
    setIsCreatedReady(true);
    await setList(values);
    //전송
    setIndex(0);
    alert('완료되었습니다.');
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
    validate: validateInput,
    onSubmit: handleSubmitCampaign,
  });
  console.log(values);

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
