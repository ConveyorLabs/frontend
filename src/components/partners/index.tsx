import { Grid, Link } from "@mui/material";
import { partners, backers } from "./data";
import { Name, StyledGridItem, StyledImg, Title, Wrapper } from "./styled";

export interface PartnerGridProps {
  title: string;
  data: any;
}

function PartnerGrid({ title, data }: PartnerGridProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Title>{title}</Title>
      <br />
      <Grid
        style={{
          maxWidth: "550px",
          border: "white 1px solid",
          borderRadius: "10px",
        }}
        xs={12}
        lg={6}
      >
        <Grid container>
          {data.map((item: any) => (
            <StyledGridItem xs={12} md={6} key={item.name}>
              <Link href={item.url} target="_blank">
                <StyledImg src={item.img} alt={item.name} />
              </Link>
              <Name>{item.text}</Name>
            </StyledGridItem>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default function Partners() {
  return (
    <Wrapper>
      <Grid
        container
        style={{
          justifyContent: "center",
          display: "flex",
          gap: "45px",
        }}
      >
        <PartnerGrid title="Trusted By" data={partners} />
        <PartnerGrid title="Backed By" data={backers} />
      </Grid>
    </Wrapper>
  );
}
