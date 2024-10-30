import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LiNav from './LiNav';
import NavWrapper from '../nav/NavWrapper';

import styled from 'styled-components';

import searchImg from '/src/assets/search_icon.svg';
import plusImg from '/src/assets/common/cross_icon.svg';
const NavUser = ({
  index,
  setIndex,
  setIsCreatedReady,
  isCreatedReady,
  list,
  searchList,
  deleteList,
  setIsOpenNav,
  isOpenNav,
}) => {
  const [isModal, setIsModal] = useState(false);
  const liRef = useRef(null);
  const deleteRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      liRef.current &&
      liRef.current != event.target &&
      deleteRef.current != event.target
    ) {
      setIsModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <NavWrapper isOpenNav={isOpenNav}>
      <Header
        // title={title}
        list={list}
        searchList={searchList}
        setIndex={setIndex}
        isCreatedReady={isCreatedReady}
        setIsCreatedReady={setIsCreatedReady}
      />
      <nav>
        <ul>
          {list.map((user, idx, arr) => {
            const isActive = idx === index;
            const modalActive = idx === isModal;
            let no = user.userNo;

            const handleClick = (e) => {
              // e.stopPropagation();
              setIndex(idx);
              setIsOpenNav(false);
            };
            const handleDelete = (e) => {
              let isfirstElementDeleted = isModal === 0;
              deleteList(user.no, idx);
              setIsModal(false);

              if (isfirstElementDeleted && isActive) {
                //0번째목록을 보고있고 0번째목록을 삭제할때
                setIndex(0);
              } else if (arr.length - 1 === index && isModal === index) {
                //마지막목록을 보고있고 마지막목록을 삭제할때
                setIndex(index - 1);
              } else if (isModal < index && index !== 0) {
                //보고있는 목록보다 지우려는 목록의 인덱스가 작을때
                setIndex(index - 1);
              }
            };
            const onClickDeleteChattingRoom = (e) => {
              e.preventDefault();
              setIsModal(idx);
            };
            // console.log(isModal);
            return (
              <StyledContainer key={idx + user.name}>
                <LiNav
                  onContextMenu={onClickDeleteChattingRoom}
                  date={user.date}
                  onClick={handleClick}
                  isActive={isActive}
                  ref={liRef}
                  // profileImg={user.profileImg}
                  no={user.no}
                  id={user.id ? user.id : undefined}
                  email={user.mail}
                  nick={user.nick}
                  name={user.name}
                  cate={user.cate}
                  key={idx + user.name}
                  modalActive={modalActive}
                />
                {isModal === idx && (
                  <button
                    className="modal"
                    onClick={handleDelete}
                    key={idx + '모달'}
                    ref={deleteRef}
                  >
                    삭제하기
                  </button>
                )}
              </StyledContainer>
            );
          })}
        </ul>
      </nav>
    </NavWrapper>
  );
};

const Header = ({
  // title,
  isManager,
  list,
  searchList,
  setIndex,
  setIsCreatedReady,
  isCreatedReady,
}) => {
  const titles = {
    '/list': '캠페인',
    '/report': '보고서',
    '/adm/user': '회원',
  };
  let pathname = useLocation().pathname;
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleCLick = () => {
    setShowInput(true);
  };
  const CreateForm = () => {
    if (isCreatedReady) {
      setIsCreatedReady((prev) => !prev);
      setIndex(list.length);
    }
  };
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowInput(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log(value);
    searchList(value);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  if (showInput) {
    return (
      <StyledHeader2 ref={inputRef} className={showInput ? 'active' : ''}>
        <input
          placeholder="Search..."
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <div onClick={handleSubmit}>
          <img src={searchImg} alt="검색아이콘" />
        </div>
      </StyledHeader2>
    );
  }
  return (
    <StyledHeader>
      <h1 className="text20"> {titles[pathname]}</h1>

      <div>
        <button onClick={handleCLick}>
          <img src={searchImg} alt="검색아이콘" />
        </button>

        <div onClick={CreateForm}>
          <img src={plusImg} alt="추가 아이콘" />
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;

  & .modal {
    position: absolute;
    top: 10px;
    left: 100px;
    width: 100px;
    height: 40px;
    background-color: #1e1e1e;
    color: var(--gray-10);
    border-radius: 5px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    &:hover {
      background-color: #4d4d4d;
    }
  }
`;
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
const StyledHeader2 = styled.header`
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

export default NavUser;