

import Button from "../common/Button";
import Logo from "../common/Logo.jsx";
import { useUserInfo } from '../../store/userInfoStore.js';
import {isLogin} from "../../utils"
import styled from 'styled-components';
import { useEffect } from "react";


const Header = () => {
  const { userInfo, rememberUser } = useUserInfo();
  // rememberUser();

  useEffect(()=>{
    rememberUser();
  console.log(userInfo);
  },[])
    return (
        <StyledHeader>
           <Logo src="src/assets/logo.svg"/>
          {isLogin()?
          <div className="rightside">
           {/* <span>{`${window.localStorage.getItem("name")}님`}</span>  */}
           <span>{`${userInfo.name}님`}</span> 
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