import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

const CardList = lazy(() => import("../components/CardList/CardList"));
const Favorites = lazy(() => import("../components/Favorites/Favorites"));
const History = lazy(() => import("../components/History/History"));
const NotFound = lazy(() => import("../components/NotFound/NotFound"));
const CardDetails = lazy(
  () => import("../components/CardList/CardDetails/CardDetails")
);

export const AppRouter = () => {
  return (
    <Content>
      <Header />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
            <Route path="characters/:id" element={<CardDetails />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Content>
  );
};
