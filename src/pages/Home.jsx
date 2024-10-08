import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';

import { CARDS } from '../constants';
import { isLogin } from '../utils';

import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Header isLogin={isLogin()} />

      <main>
        <nav>
          <StyledUl>
            {CARDS.map((card, idx) => (
              <Card {...card} key={`${card.title}+${idx}`} />
            ))}
          </StyledUl>
        </nav>
      </main>

      {/* <Footer/> */}
    </>
  );
};

const Card = ({ title, desc, img, url }) => {
  const navigate = useNavigate();
  const handleClick = (url) => {
    if (isLogin()) {
      navigate(`/${url}`);
    } else {
      alert('로그인이 필요합니다.');
      return;
    }
  };

  return (
    <StyledLi className="cardItem" onClick={() => handleClick(url)}>
      <img src={img} alt={`${title} 대표 이미지`} />
      <h1 className="text22">{title}</h1>
      <p className="text22">{desc}</p>
    </StyledLi>
  );
};

const StyledUl = styled.ul`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: var(--home-max-width);
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 189px;
  flex-wrap: wrap;

  @media only screen and (width <= 1200px) {
    & {
      width: 80%;
      margin-top: 50px;
    }
  }

  @media only screen and (width <= 750px) {
    & {
      justify-content: center;
      margin-top: 50px;
    }
  }

  @media only screen and (width <= 280px) {
    & {
      margin-top: 50px;
    }
  }
`;
// card css
const StyledLi = styled.li`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  max-width: 250px;
  width: 100%;
  margin-bottom: 20px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  /* border: 1px solid red; */

  & > img {
    width: 100%;
  }

  & > h1 {
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
    font-size: 1.25rem;
  }

  & > p {
    margin-top: 16px;
    text-align: center;
    font-size: 1rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default Home;
