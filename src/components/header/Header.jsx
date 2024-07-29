import Button from "../common/Button";
import Logo from "../common/Logo.jsx"

import styled from 'styled-components';

const Header = () => {
    const handleClick =()=>{
        location.href ="/login";
     };

    return (
        <StyledHeader>
          <Logo/>
          <Button onClick ={()=>handleClick()}  type="login" primary>로그인</Button>
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
max-width: var(--home-max-width);
height:258px;
padding-bottom : 17px;

`;

// width:1145px;
export default Header;