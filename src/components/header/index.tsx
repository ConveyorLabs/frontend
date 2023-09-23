import * as React from "react";
import styled from "styled-components";
import { Link as MuiLink } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "src/assets/svg/logo.svg";
import { device } from "src/device";

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
`;

const NavigationLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  font-size: 16px;

  @media ${device.mobile} {
    right: 0px;
    top: 0px;
    position: absolute;
  }

  @media ${device.tablet} {
    right: 0px;
    position: unset;
  }
`;

const Logo = styled.div`
  height: 30px;
  width: 75px;

  @media ${device.mobile} {
    display: none;
  }

  @media ${device.tablet} {
    display: flex;
  }
`;

const StyledLink = styled(MuiLink)`
  text-decoration: none;
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <NavigationLinks>
        <StyledLink
          href="https://docs.conveyor.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outlined">docs</Button>
        </StyledLink>

        <StyledLink
          href="https://app.conveyor.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained">Launch App</Button>
        </StyledLink>
      </NavigationLinks>
    </Wrapper>
  );
}
