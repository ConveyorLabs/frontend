import styled from "styled-components";
import { device } from "src/device";
import backgroundSvg from "src/assets/webp/background.webp";

export const HeroWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ffffff;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  height: 100vh;
  margin: -35px -35px 0 -35px;
  background: url(${backgroundSvg}) no-repeat center center;
`;

export const AbsolutePositionedFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  margin: 0 auto;
  left: 35px;
  right: 35px;
  width: stretch;
  max-width: 1100px;
`;

export const TextWrapper = styled(AbsolutePositionedFlexColumn)`
  @media ${device.mobile} {
    top: 125px;
  }
  @media ${device.desktop} {
    top: unset;
    bottom: 100px;
  }
`;

export const CtaWrapper = styled(AbsolutePositionedFlexColumn)`
  justify-content: space-between;
  align-items: center;
  bottom: 35px;
  @media ${device.mobile} {
    height: 125px;
    flex-direction: column;
  }
  @media ${device.desktop} {
    height: unset;
    flex-direction: row;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  @media ${device.mobile} {
    align-self: center;
    justify-content: space-evenly;
    width: 100%;
  }
  @media ${device.desktop} {
    align-self: flex-start;
    justify-content: unset;
    width: fit-content;
    gap: 20px;
  }
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
    font-size: 25px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
`;

export const Subtitle = styled.div`
  font-weight: normal;
  line-height: 150%;
  @media ${device.desktop} {
    font-size: 35px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;

export const ChainIcon = styled.img`
  @media ${device.mobile} {
    width: 50px;
    height: 50px;
  }
  @media ${device.desktop} {
    width: 30px;
    height: 30px;
  }
`;
