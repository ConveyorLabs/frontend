import { Grid, Link } from "@mui/material";
import { partners, backers } from "./data";
import {
  Name,
  StyledDiv,
  StyledGrid,
  StyledGridItem,
  StyledImg,
  Title,
  Wrapper,
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
    <StyledDiv>
      <Title>{title}</Title>
      <Grid container>
        {data.map((item) => (
          <PartnerItem key={item.id} item={item} />
        ))}
      </Grid>
    </StyledDiv>
  );
}

export default function Partners() {
  return (
    <Wrapper>
      <StyledGrid container>
        <PartnerGrid title="Trusted By" data={partners} />
        <PartnerGrid title="Backed By" data={backers} />
      </StyledGrid>
    </Wrapper>
  );
}
