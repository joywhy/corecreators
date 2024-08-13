import React from 'react';
import Dropdown from './Dropdown';
import CheckBoxes from './CheckBox';
import { country, type, gender, age, tag, cate } from '../../constants';
import styled from 'styled-components';

// {
//   type: null,
//   country: null,
//   cate: '',
//   gender: '',
//   age: '',
//   tag: [],
//   minFollower: '',
//   maxFollower: '',
// };
export const Filter = ({ value, setValue }) => {
  //드롭다운 handler
  const handleChange = (name, newValue) => {
    setValue({ ...value, [name]: newValue });
  };
  //체크박스 handler
  const checkedItemHandler = (name, newValue, isChecked) => {
    if (isChecked) {
      setValue({ ...value, [name]: [...value[name], newValue] });
      return;
    }

    if (!isChecked && value[name].includes(newValue)) {
      setValue({
        ...value,
        [name]: value[name].filter((item) => item !== newValue),
      });
      return;
    }

    return;
  };

  return (
    <StyldForm>
      <h3>세부필터</h3>
      <div className="dropdown-wrapper">
        <Dropdown
          list={country}
          name="country"
          value={value.country}
          handleDropDown={handleChange}
        />
        <Dropdown
          list={type}
          name="type"
          value={value.type}
          handleDropDown={handleChange}
        />
        <Dropdown
          list={gender}
          name="gender"
          value={value.gender}
          handleDropDown={handleChange}
        />
        <Dropdown
          list={age}
          name="age"
          value={value.age}
          handleDropDown={handleChange}
        />
      </div>
      <CheckBoxes
        checkedItemHandler={checkedItemHandler}
        list={tag}
        name="tag"
        checkedList={value.tag}
      />
      <CheckBoxes
        checkedItemHandler={checkedItemHandler}
        list={cate}
        name="cate"
        checkedList={value.cate}
      />
    </StyldForm>
  );
};

const StyldForm = styled.form`
  width: 817px;
  height: 418px;
  margin-bottom: 1000px;
  border-radius: 20px;
  background-color: #fff;
  margin-top: 44px;
  box-sizing: border-box;
  padding: 25px 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h3 {
    font-size: 18px;
    font-weight: 400;
    color: #5d5d5d;
    text-align: center;
  }

  & .dropdown-wrapper {
    width: 100%;
    margin-top: 39px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;
