import { useState } from "react";

export default function CheckoutButton() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "2px solid green", padding: 16 }}>
      <h2>Microfrontend Checkout</h2>
      <p>Rodando na porta 5001</p>
      <button onClick={() => setCount(count + 1)}>Comprei {count} vezes</button>
    </div>
  );
}
