import { styled } from "styled-components";
import { device } from "src/device";
import { Link, Link as MuiLink } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  height: 36px;
  top: 35px;
  left: 35px;
  right: 35px;
  align-items: center;
  justify-content: space-between;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.02em;
  font-size: 30px;
  color: white;
`;

export const NavigationLinks = styled.div`
  display: flex;
  gap: 15px;
  font-size: 16px;
  right: 0px;
  top: 0px;

  @media ${device.mobile} {
    position: absolute;
  }

  @media ${device.tablet} {
    position: unset;
  }
`;

export const Logo = styled.img`
  height: 36px;
  width: 75px;

  /* @media ${device.mobile} {
    display: none;
  } */

  @media ${device.tablet} {
    display: block;
  }
`;
