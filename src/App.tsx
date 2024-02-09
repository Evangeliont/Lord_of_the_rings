import { Content } from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper";
import { Page } from "./components/Pages";
import { Main } from "./components/Main";
import { CardList } from "./components/CardList/CardList";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Content>
        <Header />
        <Wrapper>
          <Page />
          <Main>
            <CardList />
          </Main>
        </Wrapper>
      </Content>
    </Provider>
  );
}

export default App;
