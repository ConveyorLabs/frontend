import "@fontsource/roboto-mono";
import "@fontsource/work-sans";
import "@fontsource/inter";
import styled from "styled-components";
import Header from "./components/header";
import Hero from "./components/hero";

const PageWrapper = styled.div`
  background: #050529;
`;

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
      {/* <div style={{ width: "100vw", height: "fit-content", background: "red" }}>
        test
      </div> */}
    </PageWrapper>
  );
};

export default App;
