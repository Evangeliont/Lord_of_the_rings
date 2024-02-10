import { Routes, Route, Navigate } from "react-router-dom";
import { CardList } from "../components/CardList/CardList";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { NotFound } from "../components/NotFound";
import { Favorites } from "../components/Favorites";

export const AppRouter = () => {
  return (
    <Content>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="posts" element={<CardList />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
    </Content>
  );
};
