import { Content } from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout";
import { CardList } from "./components/CardList";

function App() {
  return (
    <Content>
      <Header />
      <Layout>
        <CardList />
      </Layout>
    </Content>
  );
}

export default App;
