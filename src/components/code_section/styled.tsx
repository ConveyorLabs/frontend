import { device } from "src/device";
import styled from "styled-components";

export const CodeWrapper = styled.div`
  height: fit-content;
  justify-content: center;
  margin: 0 auto;
  color: white;
  max-width: 1100px;
  display: flex;
  @media ${device.mobile} {
    flex-direction: column;
    font-size: 15px;
  }
  @media ${device.tablet} {
    gap: 45px;
  }
  @media ${device.desktop} {
    flex-direction: row;
  }
`;
