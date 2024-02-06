import { Link } from "@mui/material";
import { partners, backers } from "./data";
import Marquee from "react-fast-marquee";
import { Name, StyledDiv, StyledImg, Title } from "./styled";
import CenteredTitleAndSubtitle from "../CenteredTitleAndSubtitle";
import { FeatureWrapper } from "../FeatureWrapper";

interface PartnerData {
  id?: string;
  url: string;
  img: string;
  name: string;
  text: string;
}

interface PartnerGridProps {
  data: PartnerData[];
}

// const PartnerItem = React.memo(({ item }: PartnerItemProps) => (
//   <StyledGridItem xs={12} md={6} key={item.id}>
//     <Link href={item.url} target="_blank">
//       <StyledImg src={item.img} alt={item.name} />
//     </Link>
//     <Name>{item.text}</Name>
//   </StyledGridItem>
// ));

// function PartnerGrid({ title, data }: PartnerGridProps) {
//   return (
//     <PartnerGridWrapper>
//       <Title>{title}</Title>
//       <br />
//       <StyledDiv>
//         <Grid container>
//           {data.map((item) => (
//             <PartnerItem key={item.id} item={item} />
//           ))}
//         </Grid>
//       </StyledDiv>
//     </PartnerGridWrapper>
//   );
// }

// export default function Partners() {
//   return (
//     <FeatureWrapper>
//       <CenteredTitleAndSubtitle
//         title="Built For Traders and Innovators"
//         subtitle="The Conveyor Aggregator is designed to seamlessly cater to retail, institutional, and developer needs, perfectly positioned to welcome the next billion users and innovators into the web3 ecosystem."
//         buttonText="Try A Swap"
//         buttonUrl="https://app.conveyor.finance/"
//       />
//       <div style={{ height: "50px" }} />
//       <StyledDiv2>
//         <PartnerGrid title="Trusted By" data={partners} />
//         <PartnerGrid title="Backed By" data={backers} />
//       </StyledDiv2>
//     </FeatureWrapper>
//   );
// }

function PartnerItem({ data }: PartnerGridProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "50px",
        margin: "0px 25px",
      }}
    >
      {data.map((item) => (
        <Link
          href={item.url}
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <StyledImg src={item.img} alt={item.name} />
            <Name>{item.text}</Name>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <FeatureWrapper>
      <CenteredTitleAndSubtitle
        title="Built For Traders and Innovators"
        subtitle="The Conveyor Aggregator API is designed to seamlessly cater to retail, institutional, and developer needs, perfectly positioned to welcome the next billion users and innovators into the web3 ecosystem."
        buttonText="Try A Swap"
        buttonUrl="https://app.conveyor.finance/"
      />
      <div style={{ height: "50px" }} />
      <StyledDiv>
        <Title>Trusted By</Title>
        <br />
        <Marquee pauseOnHover>
          <PartnerItem data={partners} />
        </Marquee>
      </StyledDiv>
      <div style={{ height: "50px" }} />
      <StyledDiv>
        <Title>Backed By</Title>
        <br />
        <Marquee pauseOnHover speed={20}>
          <PartnerItem data={backers} />
        </Marquee>
      </StyledDiv>
    </FeatureWrapper>
  );
}
