//svg images
import discord from "src/assets/svg/discord.svg";
import github from "src/assets/svg/github.svg";
import twitter from "src/assets/svg/twitter.svg";
import dune from "src/assets/svg/dune.svg";
import ethereum from "src/assets/svg/chains/ethereum.svg";
import polygon from "src/assets/svg/chains/polygon.svg";
import bsc from "src/assets/svg/chains/bnb-chain.svg";
import arbitrum from "src/assets/svg/chains/arbitrum.svg";
import optimism from "src/assets/svg/chains/optimism.svg";
import base from "src/assets/svg/chains/base.svg";
import defillama from "src/assets/svg/defillama.svg";

export const Social = {
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
    link: "https://discord.gg/8kSRuySRUe",
    alt: "Discord",
  },
  Dune: {
    icon: dune,
    link: "https://dune.com/conveyor_labs/conveyor-aggregator",
    alt: "Dune",
  },
  Defillama: {
    icon: defillama,
    link: "https://defillama.com/aggregators/conveyor",
    alt: "Dune",
  },
};

export const Chains = {
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
