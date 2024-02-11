import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
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
const SingIn = lazy(
  () => import("../components/Header/LoginBlock/SignIn/SignIn")
);
const SingUp = lazy(
  () => import("../components/Header/LoginBlock/SignUp/SignUp")
);

export const AppRouter = () => {
  return (
    <Content>
      <Header />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/singIn"
              element={
                <ErrorBoundary fallback={<h1></h1>}>
                  <SingIn />
                </ErrorBoundary>
              }
            />
            <Route
              path="/singUp"
              element={
                <ErrorBoundary fallback={<h1></h1>}>
                  <SingUp />
                </ErrorBoundary>
              }
            />
            <Route path="/" element={<CardList />} />
            <Route
              path="/favorites"
              element={
                <ErrorBoundary fallback={<h1>Error</h1>}>
                  <Favorites />
                </ErrorBoundary>
              }
            />
            <Route
              path="/history"
              element={
                <ErrorBoundary fallback={<h1>Error</h1>}>
                  <History />
                </ErrorBoundary>
              }
            />
            <Route
              path="characters/:id"
              element={
                <ErrorBoundary fallback={<h1>Error</h1>}>
                  <CardDetails />
                </ErrorBoundary>
              }
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Content>
  );
};
