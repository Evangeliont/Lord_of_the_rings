import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <Layout>
      <Header />
      <Home />
    </Layout>
  );
}

export default App;
