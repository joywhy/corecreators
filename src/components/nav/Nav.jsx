import React, { useState, useRef, useEffect } from 'react';
import Li from '../common/Li';
import NavWrapper from './NavWrapper';
import Header from './Header';
import { getUserInfoCate } from '../../utils';
import { responsiveWidthMiddle } from '../../constants';
import styled from 'styled-components';

const Nav = ({
  index,
  setIndex,
  setIsCreatedReady,
  isCreatedReady,
  list,
  searchList,
  deleteList,
  setIsOpenNav,
  isOpenNav,
  setIsContentOpen,
  userNo,
}) => {
  const [isModal, setIsModal] = useState(false);
  let isManager = getUserInfoCate() === '최고관리자';
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
        {...{
          isManager,
          list,
          searchList,
          setIndex,
          isCreatedReady,
          setIsOpenNav,
          setIsContentOpen,
          setIsCreatedReady,
        }}
      />
      <nav>
        <ul>
          {list.map((campaign, idx, arr) => {
            const isActive = idx === index;
            const modalActive = idx === isModal;
            let no = campaign.userNo;
            let advertiser = userNo[idx];
            const handleClick = (e) => {
              setIndex(idx);
              if (window.innerWidth < responsiveWidthMiddle) {
                setIsOpenNav(false);
                setIsContentOpen(true);
              }
              setIsCreatedReady(true);
            };
            const handleDelete = (e) => {
              let isfirstElementDeleted = isModal === 0;
              deleteList(campaign.no, idx);
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
              // console.log("ehdwkr");
              setIsModal(idx);
            };
            return (
              <StyledContainer key={idx + campaign.name}>
                <Li
                  onContextMenu={onClickDeleteChattingRoom}
                  date={campaign.date}
                  onClick={handleClick}
                  isActive={isActive}
                  title={campaign.name}
                  advertiser={advertiser}
                  key={idx + campaign.name}
                  ref={liRef}
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

export default Nav;
