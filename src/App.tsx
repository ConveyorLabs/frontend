import "@fontsource/roboto-mono";
import "@fontsource/work-sans";
import "@fontsource/inter";
import styled from "styled-components";
import Header from "./components/header";
import Hero from "./components/hero";

const PageWrapper = styled.div`
  background: #050529;
  height: 100vh;
  width: 100vw;
  margin: 0;
  position: relative;
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
