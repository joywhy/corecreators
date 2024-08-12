import React from "react"
import styled  from "styled-components";


export const SearchBox = ({value,setValue})=>{
    const handleChange = (e) => {
        setValue(e.target.value);
      };

    return (
      <StyleDiv>
       <StyleInput  value={value} onChange={handleChange} placeholder="   크리에이터의  아이디 또는 이름을 입력해보세요!"/>

       <StyleButton>
        <img src="/src/assets/common/search_blue.svg" alt="검색"/>
       </StyleButton>
      </StyleDiv>
    )
  }

  const StyleDiv = styled.div`
  position: relative;
  width: 447px;
  box-sizing: border-box;
  margin-top: 74px;
  `;

  const StyleInput =styled.input`
    box-sizing: border-box;
  width: 447px;
  height: 45px;
  border-radius: 30px;
  border: 2px solid transparent;
  background-image: linear-gradient(#FCFCFC,  #FCFCFC
  ),
    linear-gradient(
      to right, #FE5C5A 0%,  #63FBF4 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  &:focus { 
    outline: none;
    box-shadow: 0 1px 10px rgba(0,0,0,0.052), 0 1px 10px rgba(0,0,0,0.1);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
 }
 &::placeholder { color: #FE5C5A; }
  `;

  const StyleButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
    transform: translate(0, -50%);

    background-color: transparent;
    border: none;
  `;