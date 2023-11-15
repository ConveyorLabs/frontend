import { Button, Link } from "@mui/material";
import { Title } from "./hero/styled";

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
      <Link
        href={buttonUrl}
        style={{
          textDecoration: "none",
          marginTop: "25px",
          alignSelf: "center",
        }}
      >
        <Button variant="contained">{buttonText}</Button>
      </Link>
    </div>
  );
}
