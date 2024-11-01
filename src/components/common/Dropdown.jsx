import React, { useState } from 'react';

import styled from 'styled-components';
const Dropdown = ({ handleDropDown, list, value }) => {
  let selectedValue = list.filter((data) => value === data.type)[0];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (value) => {
    handleDropDown(value);
    setIsOpen(false);
  };
  return (
    <StyleDropdown>
      <div
        className="SelectedValue"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>
          <img
            src={selectedValue.imgUrl}
            alt={`${selectedValue.name} 이미지`}
          />
          <span>{selectedValue.name}</span>
        </div>
        <img
          src="/src/assets/common/downArrow_icon.svg"
          className={isOpen ? 'downArrow reverse ' : 'downArrow'}
          alt="화살표"
        />
      </div>
      {isOpen && (
        <ul>
          {list.map((item, index) => (
            <li
              onClick={() => {
                handleClick(item.type);
              }}
              key={index + 'item'}
            >
              <img src={item.imgUrl} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </StyleDropdown>
  );
};

const StyleDropdown = styled.div`
  /* border: 1px solid red; */
  position: relative;
  width: 110px;
  height: 40px;
  & .SelectedValue {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    width: 110px;
    justify-content: space-between;
    & > div {
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
    }
    & span {
      margin: auto 5px;
      font-size: 14px;
    }
    & img.downArrow.reverse {
      transform: rotate(180deg);
    }
  }
  & ul {
    position: absolute;
    top: 40px;
    left: 0;
    /* height: 40px; */
    background-color: white;
    position: relative;
    /* border: 1px solid red; */
    z-index: 10;
    font-size: 14px;
    & li {
      width: 100%;
      display: flex;
      justify-content: left;
      height: 40px;
      align-items: center;
      & img {
        width: 23px;
        margin-right: 5px;
      }
    }
    & li:hover {
      background-color: #f5f5f5;
    }
  }
`;

export default Dropdown;
