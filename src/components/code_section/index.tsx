import { CodeWrapper } from "./styled";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { codeString, codeString2 } from "./data";
import { Title } from "../hero/styled";
import { Button } from "@mui/material";

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
          maxWidth: "600px",
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
        <Button
          variant="contained"
          style={{ marginTop: "20px", width: "200px", alignSelf: "center" }}
        >
          Read the Docs
        </Button>
      </div>
      <CodeWrapper>
        <CodeSeparation>{codeString}</CodeSeparation>
        <CodeSeparation>{codeString2}</CodeSeparation>
      </CodeWrapper>
    </div>
  );
}
