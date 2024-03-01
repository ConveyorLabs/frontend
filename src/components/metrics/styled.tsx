import { device } from "src/device";
import styled from "styled-components";

export const MetricWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    width: 33.33%;
  }
`;

export const MetricTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #ffffff;

  @media ${device.tablet} {
    font-size: 15px;
  }
`;

export const MetricValue = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  color: #ffffff;
  display: flex;
  font-size: 55px;
`;

export const BorderedDiv = styled.div`
  max-width: 1100px;
  border: white 1px solid;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    padding: 20px;
  }
`;
