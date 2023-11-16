import * as React from "react";
import Button from "@mui/material/Button";
import logo from "src/assets/svg/logo.svg";
import { Wrapper, Logo, NavigationLinks } from "./styled";
import { Link } from "@mui/material";

interface ButtonGroupProps {
  text: string;
  url: string;
  variant: "outlined" | "contained";
  size: "small" | "medium" | "large";
  alignment?: "flex-start" | "center" | "flex-end";
}

export function ButtonGroup({ text, url, variant, size }: ButtonGroupProps) {
  return (
    <Link
      href={url}
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Button variant={variant} size={size}>
        {text}
      </Button>
    </Link>
  );
}

export default function Header() {
  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <NavigationLinks>
        <ButtonGroup
          text="Docs"
          url="https://docs.conveyor.finance"
          variant="outlined"
          size="medium"
        />
        <ButtonGroup
          text="Launch App"
          url="https://app.conveyor.finance"
          variant="contained"
          size="medium"
        />
      </NavigationLinks>
    </Wrapper>
  );
}
