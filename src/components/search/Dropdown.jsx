import React, { useState } from 'react';
import img from '/src/assets/common/downArrow_icon.svg';
import styled from 'styled-components';

const Dropdown = ({ handleDropDown, list, value, name }) => {
  let selectedValue = list.filter((data) => value === data.value)[0];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (value) => {
    handleDropDown(name, value);
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
          <span>{selectedValue.label}</span>
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
                handleClick(item.value);
              }}
              key={index + 'item'}
            >
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </StyleDropdown>
  );
};

const StyleDropdown = styled.div`
  position: relative;
  height: 40px;
  flex-grow: 1;

  & .selected-value {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    cursor: pointer;

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
    top: 10px;
    left: 0;
    background-color: white;
    position: relative;
    border: 1px solid #e4e4e4;
    z-index: 10;
    font-size: 14px;
    border-radius: 5px;

    & li {
      width: 100%;
      display: flex;
      justify-content: left;
      height: 40px;
      align-items: center;
      box-sizing: border-box;
      padding-left: 10px;
    }

    & li:hover {
      background-color: #f5f5f5;
    }
  }
`;

export default Dropdown;
