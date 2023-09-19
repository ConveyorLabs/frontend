import styled from "styled-components";
import logo from "src/assets/svg/logo.svg";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 35px;
  left: 35px;
  right: 35px;
  width: stretch;
  align-items: center;
  justify-content: space-between;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  border: 1px solid red;
  /* -webkit-backdrop-filter: blur(7px);
backdrop-filter: blur(7px); */
`;

const HeaderFont = styled.a`
  color: white;
  font-size: 30px;
`;

const Logo = styled.div`
  display: flex;
  height: 35px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <HeaderFont>Hello</HeaderFont>
    </Wrapper>
  );
}
