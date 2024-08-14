import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
function valuetext(value) {
  return `${value}°C`;
}
export default function RangeSlider({
  list,
  minFollower,
  maxFollower,
  changeValue,
}) {
  let value = [minFollower, maxFollower];

  const handleChange = (event, newValue) => {
    changeValue(newValue);
  };

  return (
    <StyledDIv>
      <h2>{list.title}</h2>
      <Box sx={{ flexGrow: 1 }}>
        <DistanceSlider
          // getAriaLabel={() => 'Temperature range'}
          aria-labelledby="range-slider"
          // aria-label="Custom marks"
          marks={list.marks}
          min={0}
          max={5}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          // getAriaValueText={() => valuetext(list.marks.value)}
          // color={'error'}
        />
        <StyledLabel>
          {list.marks.map((mark, idx) => (
            <span key={idx}>{mark.label}</span>
          ))}
        </StyledLabel>
      </Box>
    </StyledDIv>
  );
}
const StyledDIv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  /* border: 1px solid red; */

  & h2 {
    font-size: 13px;
    width: 130px;
    margin-top: 10px;

    /* border: 1px solid red; */
  }
`;
const DistanceSlider = styled(Slider)`
  /* margin-left: 10px; */

  /* width: 400px; */

  /* border: 1px solid red; */
  box-sizing: border-box;

  .MuiSlider-thumb {
    color: #ff5d5a;
  }

  .MuiSlider-rail {
    color: #ccc;
  }

  .MuiSlider-track {
    color: #ff5d5a;
  }

  color: #ff5d5a;
`;
const StyledLabel = styled.div`
  width: 105%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #989898;
  margin-top: -15px;
  font-size: 13px;

  & span:nth-child(n + 3) {
    position: relative;
    left: 10px;
  }

  & span:nth-child(3) {
    position: relative;
    left: 20px;
  }

  & span:nth-child(4) {
    position: relative;
    left: 25px;
  }

  & span:nth-child(5) {
    position: relative;
    left: 30px;
  }
`;
