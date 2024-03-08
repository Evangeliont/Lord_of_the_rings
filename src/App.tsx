import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "./Context/ThemeContext";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { SingUp } from "./pages/SignUp";
import { SingIn } from "./pages/SignIn";
import { store } from "./store/store";

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signUp" element={<SingUp />} />
              <Route path="/signIn" element={<SingIn />} />
              <Route path="/NotFound" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/NotFound" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
