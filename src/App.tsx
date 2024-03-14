import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Favorites } from "./pages/Favorites";
import { History } from "./pages/History";
import { useAuthUser } from "./hooks/useAuthUser";
import { CardDetails } from "./components/CardList/Card/CardDetails";

function App() {
  useAuthUser();

  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/history" element={<History />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
