import * as React from "react";
import Button from "@mui/material/Button";
import logo from "src/assets/svg/logo.svg";
import { Wrapper, Logo, NavigationLinks } from "./styled";
import { Link } from "@mui/material";

export default function Header() {
  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <NavigationLinks>
        <Link
          href="https://docs.conveyor.finance"
          style={{ textDecoration: "none" }}
        >
          <Button variant="outlined">docs</Button>
        </Link>

        <Link
          href="https://app.conveyor.finance"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained">Launch App</Button>
        </Link>
      </NavigationLinks>
    </Wrapper>
  );
}
