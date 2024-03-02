import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <Layout>
      <Header />
      <Home />
    </Layout>
  );
};
