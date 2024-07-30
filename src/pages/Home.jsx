import React from "react";
import Header from "../components/header/Header";
import {CARDS} from  "../constants"

import styled from 'styled-components';


const Home = () => {
  
  return (
   <>
   <Header/>

   <main>
    <nav>
      <StyledUl>
       {CARDS.map((card,idx)=><Card {...card} key ={`${card.title}+${idx}`}/>)}
      </StyledUl>
    </nav>
   </main>

   {/* <Footer/> */}
   </>
  )
}

const Card = ({title,desc,img,url}) => {

    const handleClick = (url)=>{
      location.href ="";
      location.href = `${url}`;
    }
  
    return (
     <StyledLi className="cardItem" onClick={()=>handleClick(url)}> 
      <img src={img} alt={`${title} 대표 이미지`} />
      <h1 className="text22">{title}</h1>
      <p className="text22">{desc}</p>
     </StyledLi>
    );
};


const StyledUl = styled.ul`
position:relative;
left: 50%;
transform: translateX(-50%);
max-width: var(--home-max-width);
display :flex;
justify-content: space-between;
margin-top: 189px;
flex-wrap:wrap;

@media only screen and (max-width: 600px) {
    & {
      justify-content: center;
    }
  }
`;
// card css
const StyledLi = styled.li`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 300px;
margin-bottom: 20px;

& >img {
width: 300px;
height: 200px;
}
 & >h1 {
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
 }
 & >p {
  margin-top: 16px;
  text-align: center;
 }
`;


export default Home