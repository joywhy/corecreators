import Button from "../common/Button";
import Logo from "../common/Logo.jsx"

import styled from 'styled-components';

const Header = () => {
    
    return (
        <StyledHeader>
          <Logo src="src/assets/logo.svg"/>
          <Button   type="login" primary>로그인</Button>
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

export default Header;