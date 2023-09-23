import styled from "styled-components";
import { device } from "src/device";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  color: #ffffff;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  position: absolute;
  left: 35px;
  right: 35px;
  @media ${device.mobile} {
    bottom: 20vh;
  }
  @media ${device.desktop} {
    bottom: 50px;
    left: 35px;
    right: 35px;
    align-items: flex-start;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const CtaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const SuperTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const SocialIconLink = styled.a`
  text-decoration-color: none;
  text-decoration: none;
`;

export const SocialIcon = styled.img``;

export const ChainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ChainIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
