import React, { useState, useEffect } from 'react';
import { SearchBox } from './SearchBox';
import { Filter } from './Filter';
import SearchResult from './SearchResult';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useCreator } from '../../store/useCreator';

import styled from 'styled-components';

const Search = () => {
  // let { width } = useWindowDimensions();
  const { member, getMember, searchCreaotr } = useCreator();
  const [searchValue, setSearchValue] = useState('');
  let initalFilter = {
    type: '',
    country: '',
    cate: [],
    gender: '',
    age: '',
    tag: [],
    minFollower: 1,
    maxFollower: 3,
  };
  const [filter, setFilter] = useState(initalFilter);
  const handleSubmit = () => {
    searchCreator(searchValue);
  };
  // useEffect(() => {
  //   const fun = async () => {
  //     await getMember(30);
  //   };
  //   fun();
  // }, []);
  return (
    <StyleDiv>
      <h1>
        관심있는 크리에이터들을 <br /> 검색해보세요
      </h1>
      <p>원하는 분야의 크리에이터들을 모아볼 수 있어요. 😉</p>

      <SearchBox
        value={searchValue}
        setValue={setSearchValue}
        handleSubmit={handleSubmit}
      />
      {/* <button>Search</button> */}
      <Filter value={filter} setValue={setFilter} inital={initalFilter} />
      <SearchResult />
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (width <= 700px) {
    & {
      width: 100%;
      box-sizing: border-box;
      overflow-x: hidden;
    }
  }

  & h1 {
    font-size: 32px;
    font-weight: bold;
    margin-top: 100px;
    text-align: center;

    @media only screen and (width <= 400px) {
      & {
        width: 80%;
        font-size: 20px;
      }
    }
  }

  & p {
    margin-top: 31px;
    font-size: 16px;
    color: #5d5d5d;

    @media only screen and (width <= 400px) {
      & {
        width: 70%;
        font-size: 13px;
      }
    }
  }
`;

export default Search;
