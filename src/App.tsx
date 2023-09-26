import "@fontsource/roboto-mono";
import "@fontsource/work-sans";
import "@fontsource/inter";
import styled from "styled-components";
import Header from "./components/header";
import Hero from "./components/hero";

const PageWrapper = styled.div`
  background: #0e003d;
`;

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
    </PageWrapper>
  );
};

export default App;
