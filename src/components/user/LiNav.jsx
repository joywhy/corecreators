import React, { forwardRef, useState } from 'react';
import { getUserInfoCate } from '../../utils';
import clientImgUrl from '/src/assets/userType/client.svg';
import managerImgUrl from '/src/assets/userType/manager.svg';
import styled from 'styled-components';

const LiNav = ({
  profileImg,
  date = '2024.7.7',
  id,
  email,
  nick,
  name,
  cate,
  isActive,
  onClick,
  no,
  onContextMenu,
  modalActive,
}) => {
  const [path, setPath] = useState(`/user/${no}.png`);

  const isManager = cate === '최고관리자';
  const isClient = cate === '거래처';
  // console.log(cate);

  return (
    <StyledLi className={isActive ? 'active' : ''} onClick={onClick}>
      <div className="left-wrapper">
        <img
          src={path}
          onError={(e) => {
            // delete this.onError;
            e.target.src = '/src/assets/common/default_profile.png';
          }}
        />
        <div className="info">
          <div>
            {isManager ? (
              <img src={managerImgUrl} alt="최고관리자표식" />
            ) : isClient ? (
              <img src={clientImgUrl} alt="클라이언트 표식" />
            ) : null}
            <span>{nick}</span>
            <span>{name}</span>
          </div>
          <h1> {id ? id : email}</h1>
        </div>
      </div>
      <p className="date text10">{new Date(date).format('Y.M.D')}</p>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;

  &.modal-actvie {
    pointer-events: none;
  }

  &.active,
  &:hover {
    background-color: var(--gray-10);
  }

  & .left-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > img {
      width: 46px;
    }

    & .info {
      margin-left: 6px;

      & div {
        display: flex;
        align-items: center;

        & span {
          font-size: 14px;
          font-weight: bold;
          margin-left: 4px;
        }

        & span:last-child {
          font-size: 12px;
          font-weight: 100;
        }
      }

      & h1 {
        font-size: 13px;
        font-weight: 400;
        color: #818181;
        margin-top: 5px;
      }
    }
  }
`;

export default LiNav;
