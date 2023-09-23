import styled from "styled-components";
import logo from "src/assets/svg/logo.svg";
import Button from "@mui/material/Button";
import * as React from "react";
import { Link } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 35px;
  left: 35px;
  right: 35px;
  align-items: center;
  justify-content: space-between;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.02em;
  font-size: 30px;
  color: white;
  /* -webkit-backdrop-filter: blur(7px);
backdrop-filter: blur(7px); */
`;

const NavigationLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  font-size: 16px;
`;

const Logo = styled.div`
  display: flex;
  height: 30px;
  width: 75px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <NavigationLinks>
        <Link
          href="https://docs.conveyor.finance"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button variant="outlined">docs</Button>
        </Link>

        <Link
          href="https://app.conveyor.finance"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained">Swap</Button>
        </Link>
      </NavigationLinks>
    </Wrapper>
  );
}
