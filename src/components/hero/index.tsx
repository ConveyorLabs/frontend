import { Button, Link } from "@mui/material";
import {
  HeroWrapper,
  CtaWrapper,
  SuperTitle,
  Title,
  Subtitle,
  ChainIcon,
  TextWrapper,
  FlexRow,
} from "./styled";

import { Chains, Social } from "./data";

export default function Hero() {
  return (
    <HeroWrapper>
      <TextWrapper>
        <SuperTitle>MEET CONVEYOR 👋</SuperTitle>
        <Title>The Hyper-Efficient Ecosystem For Cheaper DEX Swaps</Title>
        <Subtitle>
          Conveyor meta-aggregates several aggregators and 100's of on-chain
          DEX's in order to provide the best prices on swaps.
        </Subtitle>
        <FlexRow>
          {Object.values(Chains).map((chain, index) => (
            <ChainIcon key={index} src={chain.icon} alt={chain.alt} />
          ))}
        </FlexRow>
      </TextWrapper>
      <CtaWrapper>
        <Link
          href="https://app.conveyor.finance"
          style={{ textDecoration: "none" }}
        >
          <Button size="large" variant="contained">
            Launch App
          </Button>
        </Link>
        <FlexRow>
          {Object.values(Social).map((platform, index) => (
            <Link
              key={index}
              href={platform.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <ChainIcon
                style={{ height: "37px" }}
                src={platform.icon}
                alt={platform.alt}
              />
            </Link>
          ))}
        </FlexRow>
      </CtaWrapper>
    </HeroWrapper>
  );
}
