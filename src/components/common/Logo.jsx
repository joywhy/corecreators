import styled from 'styled-components';
const Logo = ({ src }) => {
  return (
    <StyledLogo href="/" className="logo">
      <img className="logo" src={src} alt="coreCreatorsLogo" />
    </StyledLogo>
  );
};
const StyledLogo = styled.a`
  width: 10rem;

  /* border: 1px solid red; */

  & img {
    width: 100%;
  }
`;
export default Logo;
