import React, { useState } from 'react';

import styled from 'styled-components';
import img from '/src/assets/common/downArrow_icon.svg';
const Dropdown = ({ handleDropDown, list, value }) => {
  let selectedValue = list.filter((data) => value === data.type)[0];
  // console.log(selectedValue);
  if (!selectedValue) {
    selectedValue = list[2];
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (value) => {
    handleDropDown(value);
    setIsOpen(false);
  };
  return (
    <StyleDropdown>
      <div
        className="selected-value"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>
          {selectedValue.imgUrl && (
            <img
              src={selectedValue.imgUrl}
              alt={`${selectedValue.name} 이미지`}
            />
          )}
          <span>{selectedValue.name}</span>
        </div>
        <img
          src={img}
          className={isOpen ? 'down-arrow reverse ' : 'down-arrow'}
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
              {item.imgUrl && <img src={item.imgUrl} />}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </StyleDropdown>
  );
};

const StyleDropdown = styled.div`
  position: relative;
  min-width: 140px;
  height: 40px;
  box-sizing: border-box;

  & .selected-value {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    width: 110px;
    justify-content: space-between;
    padding-left: 5px;

    & > div {
      display: flex;
      align-items: center;
    }

    & span {
      margin: auto 5px;
      font-size: 14px;
    }

    & img.down-arrow.reverse {
      transform: rotate(180deg);
    }
  }

  & ul {
    top: 40px;
    left: 0;
    background-color: white;
    position: relative;
    z-index: 10;
    font-size: 14px;

    & li {
      width: 100%;
      display: flex;
      justify-content: left;
      height: 40px;
      align-items: center;
      padding-left: 5px;

      & img {
        height: 50%;
        max-width: 18px;
        margin-right: 5px;
      }
    }

    & li:hover {
      background-color: #f5f5f5;
    }
  }
`;

export default Dropdown;
