import { Content } from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main";
import { CardList } from "./components/CardList/CardList";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Content>
        <Header />
        <Main>
          <CardList />
        </Main>
      </Content>
    </Provider>
  );
}

export default App;
