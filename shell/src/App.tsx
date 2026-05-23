import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RemoteBoundary from "./components/RemoteBoundary";
import FallbackHeader from "./components/FallbackHeader";
import LoginPage from "./pages/LoginPage"; // novo
import { useUserStore } from "./store/userStore";

const Header = lazy(() => import("designSystem/Header"));
const CheckoutPage = lazy(() => import("checkout/CheckoutPage"));

function Home() {
  const user = useUserStore((state) => state.user);
  return (
    <div style={{ padding: 20 }}>
      <h2>Home do Shell</h2>
      {user ? (
        <p>Você está logado como {user.name}</p>
      ) : (
        <Link to="/login">Fazer Login</Link>
      )}
    </div>
  );
}

function App() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  return (
    <BrowserRouter>
      <RemoteBoundary fallback={<FallbackHeader />}>
        <Suspense
          fallback={<div style={{ height: 60, background: "#1a1a1a" }} />}
        >
          <Header user={user} onLogout={logout} />
        </Suspense>
      </RemoteBoundary>

      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout/*" element={<CheckoutPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
