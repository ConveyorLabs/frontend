import { CodeWrapper } from "./styled";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { codeString, codeString2 } from "./data";
import { Title } from "../hero/styled";
import { Button, Link } from "@mui/material";

type CodeSectionProps = {
  children: string;
};

function CodeSeparation({ children }: CodeSectionProps) {
  return (
    <SyntaxHighlighter
      language="json"
      style={atomOneDark}
      customStyle={{
        borderRadius: "10px",
        background: "transparent",
        border: "1px solid white",
        fontSize: "17px",
        height: "fit-content",
        overflow: "none",
        display: "flex",
        maxWidth: "fit-content",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
export default function CodeSection() {
  return (
    <div>
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
          Robust Swap API
        </Title>
        <Title
          style={{
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "20px",
          }}
        >
          Our API is built to be robust and scalable to your fit your needs.
          Available on 6 EVM chains, add swap functionality to your telegram
          bot, website, or app in minutes.
        </Title>
        <Link
          href="https://docs.conveyor.finance/api"
          style={{
            textDecoration: "none",
            marginTop: "25px",
            alignSelf: "center",
          }}
        >
          <Button variant="contained">Check API Docs</Button>
        </Link>
      </div>
      <CodeWrapper>
        <CodeSeparation>{codeString}</CodeSeparation>
        <CodeSeparation>{codeString2}</CodeSeparation>
      </CodeWrapper>
    </div>
  );
}
