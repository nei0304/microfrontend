import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você chamaria sua API real
    const fakeUser = { id: 1, name: "Francinei" };
    const fakeToken = "jwt-token-abc";

    login(fakeUser, fakeToken);
    navigate("/"); // volta pra home depois de logar
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Entrar</h2>
      <p>Simulação de login pra testar o MFE</p>
      <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
        Fazer Login como Francinei
      </button>
    </div>
  );
}
