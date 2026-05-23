import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Header = lazy(() => import("designSystem/Header"));

function Step1() {
  return <h3 style={{ padding: 20 }}>Passo 1: Carrinho</h3>;
}

export default function CheckoutPage() {
  return (
    <>
      <Suspense fallback={null}>
        <Header userName="Francinei" />
      </Suspense>

      <div style={{ border: "2px solid green", margin: 20, padding: 20 }}>
        <h2>App Checkout</h2>
        <Routes>
          <Route path="/" element={<Step1 />} />
        </Routes>
      </div>
    </>
  );
}
