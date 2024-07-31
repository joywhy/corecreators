
import {useEffect} from "react";
import { userInfo } from '../../store/state.js';
import { getUserInfo } from '../../api/index.js';
import Button from "../common/Button";
import Logo from "../common/Logo.jsx";

import { useAtom } from 'jotai';
import styled from 'styled-components';


const Header = () => {

let token = window.localStorage.getItem("token");

let isLogin = token?true:false;
console.log( isLogin );
    
   return (
        <StyledHeader>
           <Logo src="src/assets/logo.svg"/>
          {isLogin?
          <div className="rightside">
           <span>{`${window.localStorage.getItem("name")}님`}</span> 
           <Button   type="logout" primary>로그아웃</Button>
           </div>
           :<Button   type="login" primary>로그인</Button>}
        </StyledHeader>
   );
};

const StyledHeader = styled.header`
position:relative;
left: 50%;
transform: translateX(-50%);
display:flex;
justify-content: space-between;
align-items: flex-end;
flex-wrap: wrap;
max-width: var(--home-max-width);
width: 80%;
height:258px;
padding-bottom : 17px;

@media only screen and (max-width: 1200px) {
    & {
     /* max-width: 1500px; */
    }
  }
& .rightside span{
 margin-right: 20px;
}
`;

export default Header;