import { Title } from "./hero/styled";
import { ButtonGroup } from "./header";

interface TitleAndSubtleProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export default function CenteredTitleAndSubtitle({
  title,
  subtitle,
  buttonText,
  buttonUrl,
}: TitleAndSubtleProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "250px",
        maxWidth: "800px",
        margin: "0 auto",
        color: "white",
      }}
    >
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
    </div>
  );
}
