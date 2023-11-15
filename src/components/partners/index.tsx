import { Grid, Link } from "@mui/material";
import { partners, backers } from "./data";
import {
  Name,
  PartnerGridWrapper,
  StyledDiv,
  StyledGridItem,
  StyledImg,
  Title,
  PartnersWrapper,
  StyledDiv2,
} from "./styled";
import React from "react";

interface PartnerData {
  id?: string;
  url: string;
  img: string;
  name: string;
  text: string;
}

interface PartnerGridProps {
  title: string;
  data: PartnerData[];
}

interface PartnerItemProps {
  item: PartnerData;
}

const PartnerItem = React.memo(({ item }: PartnerItemProps) => (
  <StyledGridItem xs={12} md={6} key={item.id}>
    <Link href={item.url} target="_blank">
      <StyledImg src={item.img} alt={item.name} />
    </Link>
    <Name>{item.text}</Name>
  </StyledGridItem>
));

function PartnerGrid({ title, data }: PartnerGridProps) {
  return (
    <PartnerGridWrapper>
      <Title>{title}</Title>
      <br />
      <StyledDiv>
        <Grid container>
          {data.map((item) => (
            <PartnerItem key={item.id} item={item} />
          ))}
        </Grid>
      </StyledDiv>
    </PartnerGridWrapper>
  );
}

export default function Partners() {
  return (
    <PartnersWrapper>
      <StyledDiv2>
        <PartnerGrid title="Trusted By" data={partners} />
        <PartnerGrid title="Backed By" data={backers} />
      </StyledDiv2>
    </PartnersWrapper>
  );
}
