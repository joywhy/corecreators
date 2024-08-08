import React, { useState } from 'react';
import Li from './Li';
import styled from 'styled-components';
import { useHasManagerPermission } from '../../hooks/useHasManagerPermission';
// import useWindowDimensions from '../../hooks/useWindowDimensions.jsx';
import { useCampaign } from '../../store/useCampaign';
const Nav = ({
  title = '캠페인',
  index,
  setIndex,
  height,
  setIsCreatedReady,
  isCreatedReady,
}) => {
  const [isModal, setIsModal] = useState(false);
  let { isManager } = useHasManagerPermission();
  const { loading, campaign, error } = useCampaign();
  //가데이터
  let advertiser = '리을컴퍼니';
  return (
    <StyledDiv style={{ height: height - 70 }}>
      <Header
        title={title}
        // addList={addList}
        isManager={isManager}
        index={index}
        campaign={campaign}
        setIndex={setIndex}
        isCreatedReady={isCreatedReady}
        setIsCreatedReady={setIsCreatedReady}
      />
      <nav>
        <ul>
          {campaign.map((campaign, idx) => {
            const isActive = idx === index;
            const handleClick = () => {
              setIndex(idx);
            };
            const handleDelete = () => {
              deleteList(idx);
              setIsModal(false);
              if (idx === 0 && idx === index) {
                setIndex(0);
              } else if (idx <= index) {
                setIndex(index - 1);
              }
            };
            const onClickDeleteChattingRoom = (e) => {
              e.preventDefault();
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
                />
                {isModal === idx && (
                  <div
                    className="modal"
                    onClick={handleDelete}
                    key={idx + '모달'}
                  >
                    삭제하기
                  </div>
                )}
              </StyledContainer>
            );
          })}
        </ul>
      </nav>
    </StyledDiv>
  );
};

const Header = ({
  title,
  addList,
  isManager,
  campaign,
  index,
  setIndex,
  setIsCreatedReady,
  isCreatedReady,
}) => {
  const [isSearch, setIsSearch] = useState(false);
  const [value, setValue] = useState('');
  // const [isCreatedReady, setIsCreatedReady] = useState(true);

  const handleCLick = () => {
    setIsSearch((prev) => !prev);
  };
  const CreateForm = () => {
    if (isCreatedReady) {
      setIsCreatedReady((prev) => !prev);
      setIndex(campaign.length);
    }
  };
  if (isSearch) {
    return (
      <StyledHeader2>
        <input placeholder="Search..." />
        <img src="/src/assets/search_icon.svg" alt="검색아이콘" />
      </StyledHeader2>
    );
  }
  return (
    <StyledHeader>
      <h1 className="text20"> {title}</h1>

      <div>
        <button onClick={handleCLick}>
          <img src="/src/assets/search_icon.svg" alt="검색아이콘" />
        </button>
        {isManager ? (
          <div onClick={CreateForm}>
            <img src="/src/assets/common/cross_icon.svg" alt="추가 아이콘" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </StyledHeader>
  );
};

const StyledContainer = styled.div`
  position: relative;
  /* border:1px solid red; */
  width: 100%;
  /* height:50px; */

  & .modal {
    position: absolute;
    top: 10px;
    left: 100px;
    width: 100px;
    height: 40px;
    background-color: white;
    border-radius: 5px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }
`;
const StyledDiv = styled.div`
  max-width: 300px;
  flex-grow: 3;
  width: 100%;
  border-right: 1px solid var(--gray-10);
  overflow: scroll;
  @media only screen and (max-width: 1200px) {
    & {
      height: calc(100vh - 70px);
      overflow: scroll;
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 47px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  & div {
    display: flex;
    & img:nth-child(1) {
      margin-right: 11px;
    }
  }
  & button {
    background-color: white;
    border: none;
    & img {
      height: 100%;
    }
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
    width: 100%;
  }
  & input:focus {
    outline: 2px solid var(--main-red);
  }
  & img {
    position: absolute;
    top: 15px;
    /* transform: x; */
    left: 20px;
  }
`;

export default Nav;
