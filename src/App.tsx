import styled from "styled-components";
import Header from "./components/header";

const PageWrapper = styled.div`
  background-color: black;
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
    </PageWrapper>
  );
};

export default App;
