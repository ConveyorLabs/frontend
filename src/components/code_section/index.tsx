import { CodeWrapper } from "./styled";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { codeString, codeString2 } from "./data";
import CenteredTitleAndSubtitle from "../CenteredTitleAndSubtle";

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
      <CenteredTitleAndSubtitle
        title="Robust Swap API"
        subtitle="Our API is built to be robust and scalable to your fit your needs.
        Available on 6 EVM chains, add swap functionality to your telegram bot,
        website, or app in minutes."
        buttonText="Check API Docs"
        buttonUrl="https://api.conveyor.finance/api"
      />
      <CodeWrapper>
        <CodeSeparation>{codeString}</CodeSeparation>
        <CodeSeparation>{codeString2}</CodeSeparation>
      </CodeWrapper>
    </div>
  );
}
