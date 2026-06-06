import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { parseGoogleCredential } from "../services/authService";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-sm p-12 flex flex-col items-center gap-8 w-full max-w-sm">
        <h1
          className="text-3xl font-bold text-[var(--color-main-dark)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Admin
        </h1>
        <p
          className="text-sm text-[var(--color-gray-medium)] text-center"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Connectez-vous avec votre compte Google pour accéder au tableau de
          bord.
        </p>
        <GoogleLogin
          onSuccess={({ credential }) => {
            if (!credential) return;
            const user = parseGoogleCredential(credential);
            if (!user) return;
            login(user);
            navigate("/admin/projects");
          }}
          onError={() => console.error("Échec de la connexion Google")}
        />
      </div>
    </div>
  );
};

export default LoginPage;
