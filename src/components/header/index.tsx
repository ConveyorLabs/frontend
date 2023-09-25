import * as React from "react";
import Button from "@mui/material/Button";
import logo from "src/assets/svg/logo.svg";
import { Wrapper, Logo, NavigationLinks, StyledLink } from "./styled";

export default function Header() {
  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
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
