import styled from "styled-components";
import { device } from "src/device";
import backgroundSvg from "src/assets/webp/background.webp";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ffffff;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  width: 100vw;
  height: 100vh;
  background: url(${backgroundSvg}) center center / cover no-repeat;
`;

export const AbsolutePositionedFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  left: 35px;
  right: 35px;
`;

export const TextWrapper = styled(AbsolutePositionedFlexColumn)`
  @media ${device.mobile} {
    bottom: 300px;
  }
  @media ${device.desktop} {
    bottom: 100px;
  }
`;

export const CtaWrapper = styled(AbsolutePositionedFlexColumn)`
  flex-direction: row;
  justify-content: space-between;
  @media ${device.mobile} {
    bottom: 235px;
  }
  @media ${device.desktop} {
    bottom: 35px;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const SuperTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const Title = styled.div`
  font-weight: 500;
  @media ${device.mobile} {
    width: 100%;
    font-size: 30px;
  }
  @media ${device.tablet} {
    width: 100%;
    font-size: 5vw;
  }
  @media ${device.desktop} {
    font-size: 50px;
    width: 60vw;
  }
`;

export const Subtitle = styled.div`
  font-weight: normal;
  font-size: 3vw;
  line-height: 150%;
  @media ${device.desktop} {
    font-size: 25px;
  }
`;

export const SocialIconLink = styled.a`
  text-decoration: none;
`;

export const ChainIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
