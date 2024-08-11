import React from 'react';
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
  const handleClick = (url) => {
    if (isLogin()) {
      location.href = '';
      location.href = `${url}`;
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
  display: flex;
  flex-flow: column wrap;
  max-width: 300px;
  width: 100%;
  margin-bottom: 20px;

  & > img {
    max-width: 300px;
    width: 100%;
    height: 200px;
  }

  & > h1 {
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
  }

  & > p {
    margin-top: 16px;
    text-align: center;
  }
`;

export default Home;
