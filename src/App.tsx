import styled from "styled-components";
import Header from "./components/header";
import Hero from "./components/hero";

const PageWrapper = styled.div`
  background: #050529;
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

const App = () => {
  require("@fontsource/roboto-mono");
  require("@fontsource/work-sans");
  require("@fontsource/inter");
  return (
    <PageWrapper>
      <Header />
      <Hero />
    </PageWrapper>
  );
};

export default App;
