import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import searchImg from '/src/assets/search_icon.svg';
import plusImg from '/src/assets/common/cross_icon.svg';
import { responsiveWidthMiddle } from '../../constants/index';
import styled from 'styled-components';

const Header = ({
  isManager,
  list,
  searchList,
  setIndex,
  setIsOpenNav,
  setIsCreatedReady,
  isCreatedReady,
  setIsContentOpen,
}) => {
  const titles = {
    '/list': '캠페인',
    '/report': '보고서',
    '/adm/user': '회원',
  };
  let pathname = useLocation().pathname;

  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');
  const ref = useRef(null);
  const CreateForm = () => {
    const { innerWidth: width } = window;
    if (width <= responsiveWidthMiddle) {
      setIsOpenNav(false);
      setIsContentOpen(true);
    }

    if (isCreatedReady) {
      setIsCreatedReady((prev) => !prev);
      setIndex(list.length);
    }
  };

  useOnClickOutside(ref, () => {
    setShowInput(false);
  });

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchList(value);
    }
  };

  if (showInput) {
    return (
      <Input ref={ref} className={showInput ? 'active' : ''}>
        <input
          placeholder="Search..."
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <div onClick={() => searchList(value)}>
          <img src={searchImg} alt="검색아이콘" />
        </div>
      </Input>
    );
  }
  return (
    <StyledHeader>
      <h1 className="text20"> {titles[pathname]}</h1>

      <div>
        <button onClick={() => setShowInput(true)}>
          <img src={searchImg} alt="검색아이콘" />
        </button>
        {isManager ? (
          <div onClick={CreateForm}>
            <img src={plusImg} alt="추가 아이콘" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  /* 오른쪽  검색, + 버튼 wrap */
  & div {
    display: flex;

    & img {
      height: 100%;
    }

    & img:nth-child(1) {
      margin-right: 11px;
    }
  }

  & button {
    background-color: white;
    border: none;
  }
`;
const Input = styled.header`
  position: relative;
  width: 100%;
  height: 47px;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  box-sizing: border-box;

  & input {
    border-radius: 5px;
    padding-left: 35px;
    height: 100%;
    box-sizing: border-box;
    background-color: #d1d1d1;
    border: none;
    width: 20%;
    overflow: hidden;
  }

  &.active input {
    width: 100%;
    transition: all 0.5s cubic-bezier(0, 0.105, 0.035, 1.57);
  }

  & input:focus {
    outline: 2px solid var(--main-red);
  }

  & img {
    position: absolute;
    top: 15px;
    left: 20px;
  }
`;
export default Header;
