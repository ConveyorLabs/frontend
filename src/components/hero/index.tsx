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

//svg images
import discord from "src/assets/svg/discord.svg";
import github from "src/assets/svg/github.svg";
import twitter from "src/assets/svg/twitter.svg";
import ethereum from "src/assets/svg/chains/ethereum.svg";
import polygon from "src/assets/svg/chains/polygon.svg";
import bsc from "src/assets/svg/chains/bnb-chain.svg";
import arbitrum from "src/assets/svg/chains/arbitrum.svg";
import optimism from "src/assets/svg/chains/optimism.svg";
import base from "src/assets/svg/chains/base.svg";

const Social = {
  Github: {
    icon: github,
    link: "https://github.com/ConveyorLabs",
    alt: "Github",
  },
  Twitter: {
    icon: twitter,
    link: "https://twitter.com/ConveyorLabs",
    alt: "Twitter",
  },
  Discord: {
    icon: discord,
    link: "https://discord.gg/w4hNNnzAax",
    alt: "Discord",
  },
};

const Chains = {
  Ethereum: {
    icon: ethereum,
    alt: "Ethereum",
  },
  Polygon: {
    icon: polygon,
    alt: "Polygon",
  },
  BSC: {
    icon: bsc,
    alt: "BNB Chain",
  },
  Arbitrum: {
    icon: arbitrum,
    alt: "Arbitrum",
  },
  Optimism: {
    icon: optimism,
    alt: "Optimism",
  },
  Base: {
    icon: base,
    alt: "Base",
  },
};

export default function Hero() {
  return (
    <HeroWrapper>
      <TextWrapper>
        <SuperTitle>MEET CONVEYOR 👋</SuperTitle>
        <Title>The Hyper-Efficient Protocol For Cheaper DEX Swaps</Title>
        <Subtitle>
          Conveyor aggregates 100's of on-chain DEX's to provide the best prices
          for swaps.
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
