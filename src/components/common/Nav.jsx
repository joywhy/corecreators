import React, { useState, useRef, useEffect } from 'react';
import Li from './Li';
import styled from 'styled-components';
import { useCampaign } from '../../store/useCampaign';
import { getUserInfoCate } from '../../utils';
const Nav = ({
  title = '캠페인',
  index,
  setIndex,
  height,
  setIsCreatedReady,
  isCreatedReady,
}) => {
  const [isModal, setIsModal] = useState(false);
  const { campaign, searchList, deleteList } = useCampaign();

  let isManager = getUserInfoCate() === '최고관리자';
  //가데이터
  let advertiser = '리을컴퍼니';
  const liRef = useRef(null);
  const deleteRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      liRef.current &&
      !liRef.current.contains(event.target) &&
      !deleteRef.current.contains(event.target)
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
    <StyledDiv style={{ height: height - 70 }}>
      <Header
        title={title}
        isManager={isManager}
        campaign={campaign}
        searchList={searchList}
        setIndex={setIndex}
        isCreatedReady={isCreatedReady}
        setIsCreatedReady={setIsCreatedReady}
      />
      <nav>
        <ul>
          {campaign.map((campaign, idx, arr) => {
            const isActive = idx === index;
            const modalActive = idx === isModal;
            const handleClick = (e) => {
              // e.stopPropagation();
              setIndex(idx);
            };
            const handleDelete = (e) => {
              let isfirstElementDeleted = isModal === 0;
              let isPrevElementDeleted = idx < index;

              deleteList(idx);
              setIsModal(false);

              if (isfirstElementDeleted && isActive) {
                setIndex(0);
              } else if (arr.length - 1 === index && isModal === index) {
                console.log('ehdwkr');
                setIndex(index - 1);
              } else if (isModal < index && index !== 0) {
                setIndex(index - 1);
              }
            };

            const onClickDeleteChattingRoom = (e) => {
              e.preventDefault();
              console.log('우클릭 동작');
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
    </StyledDiv>
  );
};

const Header = ({
  title,
  isManager,
  campaign,
  searchList,
  setIndex,
  setIsCreatedReady,
  isCreatedReady,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleCLick = () => {
    setShowInput(true);
  };
  const CreateForm = () => {
    if (isCreatedReady) {
      setIsCreatedReady((prev) => !prev);
      setIndex(campaign.length);
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
      <StyledHeader2 ref={inputRef}>
        <input
          placeholder="Search..."
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <div onClick={handleSubmit}>
          <img src="/src/assets/search_icon.svg" alt="검색아이콘" />
        </div>
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
  width: 100%;

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

  @media only screen and (width <= 1200px) {
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
    width: 100%;
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

export default Nav;
