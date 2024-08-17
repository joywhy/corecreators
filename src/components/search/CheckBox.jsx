import { useState } from 'react';
import styled from 'styled-components';

const CheckBoxes = ({ checkedItemHandler, list, name, checkedList }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = (e, value) => {
    setIsChecked(!isChecked);
    checkedItemHandler(name, value, e.target.checked);
  };

  return (
    <StyleDiv className="checkbox-group">
      <h2>{list.title}</h2>
      <div className="checkbox-wrapper">
        {list.list.map((item, idx) => (
          <div className="checkbox" key={idx}>
            <input
              type="checkbox"
              id={item}
              checked={checkedList.includes(item)}
              onChange={(e) => checkHandler(e, item)}
            />
            <label htmlFor={item}>
              <span>{item}</span>
            </label>
          </div>
        ))}
      </div>
    </StyleDiv>
  );
};

const StyleDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  align-items: start;
  color: var(--black);

  @media only screen and (width <= 700px) {
    & {
      flex-direction: column;
    }

    & h2 {
      /* width: 100%; */
      margin-bottom: 20px;
    }
  }

  & h2 {
    width: 126px;
    font-size: 13px;
    margin-top: 4px;
  }

  & .checkbox-wrapper {
    /* border: 1px solid red; */
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (width <= 700px) {
      & {
        width: 100%;
        justify-content: flex-start;
        gap: 20px;
      }
    }

    & .checkbox {
      max-width: 100%;
      height: 30px;
      line-height: 30px;

      & input {
        display: none;
      }

      & input + label {
        cursor: pointer;
        display: flex;
      }

      & input + label > span {
        padding-left: 5px;
        display: block;
        position: relative;
        top: -1px;
        font-size: 13px;
      }

      /* label:before에 체크하기 전 */
      & input + label::before {
        content: '';
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-top: 4px;
        border-radius: 3px;
        vertical-align: middle;
        background-color: #e4e4e4;
      }

      /* label:before에 체크 후 */
      & input:checked + label::before {
        content: '';
        background-color: #ff5d5a;
        border-color: #ff5d5a;
        background-image: url('check_btn.png');
        background-repeat: no-repeat;
        background-position: 50%;
      }
    }
  }
`;

export default CheckBoxes;
