import React ,{useState}from 'react';
import { SearchBox } from './SearchBox';
import {Filter} from "./Filter"
import styled from 'styled-components';

const Search = () => {
  const [searchValue,setSearchValue] = useState("");
  const [filter,setFilter]= useState({});
  return (
    <StyleDiv>
      <h1>
        관심있는 크리에이터들을 <br /> 검색해보세요
      </h1>
      <p>원하는 분야의 크리에이터들을 모아볼 수 있어요. 😉</p>
  
      <SearchBox value={searchValue} setValue={setSearchValue}/>
      {/* <button>Search</button> */}
      <Filter value= {filter} setValue={setFilter} f/>
    </StyleDiv>
  );
};


const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 32px;
    font-weight: bold;
    margin-top: 100px;
    text-align: center;
  }

  & p {
    margin-top: 31px;
    font-size: 16px;
    color: #5d5d5d;
  }
`;


export default Search;
