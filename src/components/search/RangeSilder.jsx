import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// range slider  RangeSilder
const RangeSilder = ({ isOpen }) => {
  const [mark, setMark] = useState();

  useEffect(() => {
    if (isOpen && mark === '') {
      setMark('1');
    }
  }, [setMark, isOpen, mark]);

  const handleSliderChange = (event) => {
    setMark(event.target.value);
  };

  const handleChange = (val) => {
    setMark(val.toString());
  };

  const labels = Array.from({ length: 5 }, (_, i) => i + 1).map((val) => (
    <Labels key={val} onClick={() => handleChange(val)}>
      {val}시간
    </Labels>
  ));

  return (
    <SliderContainer>
      <Slider
        type="range"
        min={1}
        max={5}
        value={parseInt(mark) || 1}
        onChange={handleSliderChange}
      />
      <Labels>{labels}</Labels>
    </SliderContainer>
  );
};

export default RangeSilder;
// slider와 label이 포함된 컨테이너의 스타일 정의
const SliderContainer = styled.div`
  border-radius: 3px;
  display: block;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  margin-top: 16px;
  padding: 20px 70px 16px;
`;

// slider의 스타일 정의
const Slider = styled.input`
  appearance: none;
  width: 100%;
  height: 14px;
  border-radius: 10px;
  background: ${(props) => {
    const percentage = ((Number(props.value) - 1) / 4) * 100;
    return `linear-gradient(to right, ${colors.mainColor} 0%, ${colors.mainColor} ${percentage}%, ${colors.grey[100]} ${percentage}%, ${colors.grey[100]} 100%)`;
  }};

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 28px;
    height: 28px;
    background-color: ${colors.white};
    border: 1px solid ${colors.grey[300]};
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    background-color: ${colors.white};
    border: 1px solid ${colors.grey[300]};
    border-radius: 50%;
    cursor: pointer;
  }
`;

// 각 label의 컨테이너 스타일 정의
const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

// 각 label 스타일 정의
const Label = styled.span`
  position: relative;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  width: 40px;

  /* font-family: SUIT; */
  font-style: normal;
  font-size: 16px;
  line-height: 1.5;
`;
