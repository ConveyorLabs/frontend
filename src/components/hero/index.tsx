import { Link } from "@mui/material";
import {
  HeroWrapper,
  CtaWrapper,
  SuperTitle,
  Title,
  Subtitle,
  ChainIcon,
  TextWrapper,
  FlexRow,
  FlexRowCTA,
} from "./styled";

import { Chains, Social } from "./data";
import { ButtonGroup } from "../ButtonGroup";
import { CustomSubstackEmbed } from "../substack";

export default function Hero() {
  return (
    <HeroWrapper>
      <TextWrapper>
        <SuperTitle>MEET CONVEYOR 👋</SuperTitle>
        <Title>The Hyper-Efficient Ecosystem For Cheaper DEX Swaps</Title>
        <Subtitle>
          Conveyor meta-aggregates several aggregators and 100's of on-chain
          DEX's in order to provide the best prices and lowest gas fees on
          swaps.
        </Subtitle>
        <FlexRow>
          {Object.values(Chains).map((chain, index) => (
            <ChainIcon key={index} src={chain.icon} alt={chain.alt} />
          ))}
        </FlexRow>
      </TextWrapper>
      <CtaWrapper>
        <FlexRowCTA>
          <CustomSubstackEmbed />
          <ButtonGroup
            text="Launch App"
            url="https://app.conveyor.finance"
            variant="contained"
            size="large"
          />
        </FlexRowCTA>
        <FlexRow>
          {Object.values(Social).map((platform, index) => (
            <Link
              key={index}
              href={platform.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <ChainIcon
                style={{ height: "37px", filter: "grayscale(1.0)" }}
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
