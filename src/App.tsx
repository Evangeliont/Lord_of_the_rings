import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthUser } from "./hooks/useAuthUser";
import { ProtectedRouteComponent } from "./components/ProtectedRoute";
import { ErrorBoundary } from "react-error-boundary";
import { Preloader } from "./components/Preloader";

const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound }))
);
const SignUp = lazy(() =>
  import("./pages/SignUp").then((module) => ({ default: module.SignUp }))
);
const SignIn = lazy(() =>
  import("./pages/SignIn").then((module) => ({ default: module.SignIn }))
);
const Favorites = lazy(() =>
  import("./pages/Favorites").then((module) => ({
    default: module.Favorites,
  }))
);
const History = lazy(() =>
  import("./pages/History").then((module) => ({
    default: module.History,
  }))
);
const SearchResult = lazy(() =>
  import("./pages/SearchResult").then((module) => ({
    default: module.SearchResult,
  }))
);
const CardDetails = lazy(() =>
  import("./components/CardList/Card/CardDetails").then((module) => ({
    default: module.CardDetails,
  }))
);
const Layout = lazy(() =>
  import("./components/Layout").then((module) => ({ default: module.Layout }))
);
const Header = lazy(() =>
  import("./components/Header").then((module) => ({ default: module.Header }))
);

function App() {
  useAuthUser();

  return (
    <Suspense fallback={<Preloader />}>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/history" element={<ProtectedRouteComponent />}>
            <Route
              path="/history"
              element={
                <ErrorBoundary fallback={<h1>Error 404</h1>}>
                  <History />
                </ErrorBoundary>
              }
            />
          </Route>
          <Route path="/favorites" element={<ProtectedRouteComponent />}>
            <Route
              path="/favorites"
              element={
                <ErrorBoundary fallback={<h1>Error 404</h1>}>
                  <Favorites />
                </ErrorBoundary>
              }
            />
          </Route>
          <Route
            path="/searchResult"
            element={
              <ErrorBoundary fallback={<h1>Error 404</h1>}>
                <SearchResult />
              </ErrorBoundary>
            }
          />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/NotFound" replace />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
