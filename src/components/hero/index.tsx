import { Button, Link } from "@mui/material";
import {
  HeroWrapper,
  CtaWrapper,
  SuperTitle,
  Title,
  Subtitle,
  ChainWrapper,
  ChainIcon,
  SocialWrapper,
  SocialIconLink,
  SocialIcon,
} from "./styled";

//svg images
import discord from "src/assets/svg/discord.svg";
import github from "src/assets/svg/github.svg";
import twitter from "src/assets/svg/twitter.svg";
import ethereum from "src/assets/svg/ethereum.svg";
import polygon from "src/assets/svg/polygon.svg";
import bsc from "src/assets/svg/bnb-chain.svg";
import arbitrum from "src/assets/svg/arbitrum.svg";
import optimism from "src/assets/svg/optimism.svg";
import base from "src/assets/svg/base.svg";

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
      <CtaWrapper>
        <SuperTitle>MEET CONVEYOR 👋</SuperTitle>
        <Title>The Hyper-Efficient Protocol For Cheaper DEX Swaps</Title>
        <Subtitle>
          Conveyor aggregates 100's of on-chain DEX's to provide the best prices
          for swaps.
        </Subtitle>
        <ChainWrapper>
          {Object.values(Chains).map((chain, index) => (
            <ChainIcon key={index} src={chain.icon} alt={chain.alt} />
          ))}
        </ChainWrapper>
      </CtaWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link
          href="https://app.conveyor.finance"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained">go to app</Button>
        </Link>
        <SocialWrapper>
          {Object.values(Social).map((platform, index) => (
            <SocialIconLink
              key={index}
              href={platform.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <SocialIcon src={platform.icon} alt={platform.alt} />
            </SocialIconLink>
          ))}
        </SocialWrapper>
      </div>
    </HeroWrapper>
  );
}
