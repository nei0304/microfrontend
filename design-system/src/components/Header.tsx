import { Link } from "react-router-dom";
type HeaderUser = {
  id: number;
  name: string;
};

type HeaderProps = {
  user?: HeaderUser | null;
  onLogout?: () => void;
};

export default function Header({ user = null, onLogout }: HeaderProps) {
  return (
    <header
      style={{
        padding: "16px",
        background: "#1a1a1a",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
        <Link to="/checkout" style={{ color: "white" }}>
          Checkout
        </Link>
      </nav>

      <div>
        {user ? (
          <>
            <span>Olá, {user.name}</span>
            <button onClick={onLogout} style={{ marginLeft: 12 }}>
              Sair
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: "white" }}>
            Entrar
          </Link>
        )}
      </div>
    </header>
  );
}
