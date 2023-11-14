import { Grid } from "@mui/material";
import styled from "styled-components";
import { device } from "src/device";

export const Wrapper = styled.div`
  padding: 30px 30px;
  box-sizing: border-box;
  height: fit-content;
  align-self: center;
  margin: auto;
  color: white;
  text-align: center;
`;

export const Title = styled.div`
  font-family: Inter;
  font-size: 35px;
`;

export const Name = styled.div`
  font-family: Inter;
  @media ${device.mobile} {
    font-size: 25px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;

export const StyledImg = styled.img`
  display: flex;
  height: 50px;
`;

export const StyledGridItem = styled(Grid)`
  align-items: center;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 55px;
  max-width: 225px;
  gap: 5px;
  margin: 25px 0px;
`;
