import logo from "src/assets/svg/logo.svg";
import { Wrapper, Logo, NavigationLinks } from "./styled";
import { ButtonGroup } from "../ButtonGroup";

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
