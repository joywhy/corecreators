import React, { forwardRef } from 'react';
import { getUserInfoCate } from '../../utils';
import styled from 'styled-components';

const Li = forwardRef(function component(
  { date = '2024.7.7', isActive, advertiser, onClick, title, onContextMenu },
  ref
) {
  let isManager = getUserInfoCate() === '최고관리자';
  if (isManager) {
    return (
      <StyledLi
        className={isActive ? 'active ' : ''}
        onClick={onClick}
        onContextMenu={onContextMenu}
        ref={ref}
      >
        <div className="title">
          <h1 className="text14"> {title}</h1>
          {advertiser && <p className="text13">{advertiser}</p>}
        </div>

        <p className="date text10">{new Date(date).format('Y.M.D')}</p>
      </StyledLi>
    );
  }

  return (
    <StyledLi className={isActive ? 'active' : ''} onClick={onClick}>
      <h1 className="text14 title"> {title}</h1>

      <p className="date text10">{new Date(date).format('Y.M.D')}</p>
    </StyledLi>
  );
});

const StyledLi = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;

  &.active,
  &:hover {
    background-color: var(--gray-10);
  }

  & p {
    color: #818181;
  }

  & .title {
    & p {
      color: #818181;
      margin-top: 7px;
    }
  }
`;

export default Li;
