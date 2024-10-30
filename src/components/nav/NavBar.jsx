import React, { useRef, useState } from 'react';
import Li from '../common/Li';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { responsiveWidthMiddle } from '../../constants';
import styled from 'styled-components';

const NavBar = ({
  list, //목록
  userNo,
  index, // 사용자가 보고있는 목록 인덱스
  setIndex,
  setIsOpenNav,
  setIsCreatedReady,
  deleteList,
}) => {
  const [isShowdeleteModal, setIsShowdeleteModal] = useState(false);
  const liRef = useRef(null);
  const deleteRef = useRef(null);

  //리스트의 마지막 목록을 보고 있는지
  let isShowedLastElement = list.length - 1 === index;

  useOnClickOutside(ref, () => {
    if (
      liRef.current &&
      liRef.current != event.target &&
      deleteRef.current != event.target
    ) {
      setIsShowdeleteModal(false);
    }
  });
  const handleClick = (idx) => {
    setIndex(idx);
    if (window.innerWidth <= responsiveWidthMiddle) {
      setIsOpenNav(false);
    }
    setIsCreatedReady(true);
  };
  const handleDelete = (no, idx, isActive) => {
    deleteList(no, idx);
    setIsShowdeleteModal(false);

    if (isShowdeleteModal === 0 && isActive) {
      //0번째목록을 보고있고 0번째목록을 삭제할때
      setIndex(0);
    } else if (isShowedLastElement && isShowdeleteModal === index) {
      //마지막목록을 보고있고 마지막목록을 삭제할때
      setIndex(index - 1);
    } else if (isShowdeleteModal < index && index !== 0) {
      //보고있는 목록보다 지우려는 목록의 인덱스가 작을때
      setIndex(index - 1);
    }
  };
  return (
    <ul>
      {list.map((campaign, idx, arr) => {
        //현재 보고있는 목록
        const isActive = idx === index;
        //삭제하기 버튼을 누른 목록인지
        const modalActive = idx === isShowdeleteModal;

        let no = campaign.userNo;
        let advertiser = userNo[idx];

        return (
          <StyledContainer key={idx + campaign.name}>
            <Li
              onContextMenu={(e) => {
                e.preventDefault();
                setIsShowdeleteModal(idx);
              }}
              ref={liRef}
              onClick={() => handleClick(idx)}
              key={idx + campaign.name}
              modalActive={modalActive}
              isActive={isActive}
              date={campaign.date}
              title={campaign.name}
              advertiser={advertiser}
            />
            {isShowdeleteModal === idx && (
              <button
                className="modal"
                onClick={() => handleDelete(campaign.no, idx)}
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
export default NavBar;
