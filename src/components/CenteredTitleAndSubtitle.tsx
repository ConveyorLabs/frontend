import { Title } from "./hero/styled";
import { ButtonGroup } from "./header";
import { styled } from "styled-components";

interface TitleAndSubtleProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

const TitleSubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-width: 800px;
  margin: 0 auto;
  color: white;
`;

export default function CenteredTitleAndSubtitle({
  title,
  subtitle,
  buttonText,
  buttonUrl,
}: TitleAndSubtleProps) {
  return (
    <TitleSubtitleWrapper>
      <Title
        style={{
          textAlign: "center",
          fontFamily: "Inter",
        }}
      >
        {title}
      </Title>
      <Title
        style={{
          textAlign: "center",
          fontFamily: "Inter",
          fontSize: "20px",
        }}
      >
        {subtitle}
      </Title>
      <div style={{ height: "25px" }} />
      <ButtonGroup
        text={buttonText}
        url={buttonUrl}
        variant="contained"
        size="large"
      />
    </TitleSubtitleWrapper>
  );
}
