import "@fontsource/roboto-mono";
import "@fontsource/work-sans";
import "@fontsource/inter";
import styled from "styled-components";
import Header from "./components/header";
import Hero from "./components/hero";
import Partners from "./components/partners";
import CodeSection from "./components/code_section";
import { Feature } from "./components/feature";

const PageWrapper = styled.div`
  background: #0e003d;
  padding: 35px;
  /* background-image: backgroundImage; */
`;

require("@fontsource/inter");
const App = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
      <div style={{ height: "150px" }} />
      <Feature />
      <div style={{ height: "150px" }} />
      <Partners />
      <div style={{ height: "150px" }} />
      <CodeSection />
    </PageWrapper>
  );
};

export default App;
