import "@fontsource/roboto-mono";
import "@fontsource/work-sans";
import "@fontsource/inter";
import styled from "styled-components";
import Header from "./components/header";
import Hero from "./components/hero";
import Partners from "./components/partners";
// import backgroundImage from "./assets/webp/fractal-background.webp";

const PageWrapper = styled.div`
  background: #0e003d;
  /* background-image: backgroundImage; */
`;

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
      <Partners />
    </PageWrapper>
  );
};

export default App;
