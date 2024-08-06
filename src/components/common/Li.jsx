import React from 'react';
import { useHasManagerPermission } from '../../hooks/useHasManagerPermission.jsx';
import styled from 'styled-components';

const Li = ({
  date = '2024.7.7',
  isActive,
  advertiser,
  onClick,
  title,
  onContextMenu,
}) => {
  let { isManager, userType } = useHasManagerPermission();

  if (isManager) {
    return (
      <StyledLi
        className={isActive ? 'active ' : ''}
        onClick={onClick}
        onContextMenu={onContextMenu}
      >
        <div className="title">
          <h1 className="text14"> {title}</h1>
          {advertiser && <p className="text13">{advertiser}</p>}
        </div>

        <p className="date text10">{date}</p>
      </StyledLi>
    );
  }

  return (
    <StyledLi className={isActive ? 'active' : ''} onClick={onClick}>
      <h1 className="text14 title"> {title}</h1>

      <p className="date text10">{date}</p>
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

  &.active,
  &:hover {
    background-color: var(--gray-10);
  }
  & .title {
    & p {
      color: #818181;
      margin-top: 7px;
    }
  }

  & p {
    color: #818181;
  }
`;

export default Li;
