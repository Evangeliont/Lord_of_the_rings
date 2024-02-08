import { Content } from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper";
import { Page } from "./components/Pages";
import { Main } from "./components/Main";
import { CardList } from "./components/CardList";

function App() {
  return (
    <Content>
      <Header />
      <Wrapper>
        <Page />
        <Main>
          <CardList />
        </Main>
      </Wrapper>
    </Content>
  );
}

export default App;
