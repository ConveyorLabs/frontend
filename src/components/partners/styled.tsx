import { Grid } from "@mui/material";
import styled from "styled-components";
import { device } from "src/device";

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
  height: 48px;
`;
export const PartnerGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
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

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 550px;
  border: white 1px solid;
  border-radius: 10px;
`;

export const StyledDiv2 = styled.div`
  display: flex;
  gap: 45px;
  width: 100%;
  @media ${device.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
