import styled, { css } from 'styled-components';


const Button = ({onClick,type,children,primary, ...props}) => {
   const handleClick =onClick? onClick:convertClick(type);
    return (
        <StyledButton onClick={handleClick}  {...props}>
          {children}
        </StyledButton>
    );
};

function convertClick (type){
  
    switch (type) {
        case "login":
         return handleClickLogin;
            break; 
        default:
            // console.log("동작");
    }
};
const handleClickLogin =()=>{
  location.href ="/login";
};

const StyledButton = styled.button`
  padding: 8px 20px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;

  color: ${(props) => props.color || 'white'};
  background: ${(props) => props.background || 'black'};
  width: ${(props) => props.width || 'auto'};
  
  border:none;
  &:hover {
     color:  ${(props) => props.background || 'black'};
     background: ${(props) => props.color || 'white'};
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
   transition: all 0.3s cubic-bezier(.25,.8,.25,1);
   border:none;
  } 

  //기본 버튼
  ${(props) =>
    props.primary &&
    css`
    height: auto;
    color: white;
    background-color: black ;
     &:hover {
        color: black;
         background-color: white ;
     }
  `}
  // 보조 버튼
  ${(props) =>
    props.secondary &&
    css`
   background-color:linear-gradient(to right, #EC6E6C , #897C77,#7FE5E0); ;
  `}
  //부가 버튼
   ${(props) =>
    props.tertiary &&
    css`
    color: white;
  `}
  //부가버튼2
    ${(props) =>
    props.quaternary &&
    css`
    color: white;
  `}

`;

export default Button;