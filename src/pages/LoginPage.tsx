import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { isAuthorizedEmail, parseGoogleCredential } from "../services/authService";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  return (
    <section className="max-w-md mx-auto px-10 py-16 flex flex-col items-center text-center gap-6">
      <h1
        className="text-5xl font-bold text-[var(--color-main-dark)]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Admin
      </h1>
      <p
        className="text-base text-[var(--color-gray-medium)] leading-relaxed"
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
          if (!isAuthorizedEmail(user.email)) {
            setError(
              "Ce compte Google n'est pas autorisé à accéder à l'administration.",
            );
            return;
          }
          setError(null);
          login(user);
          navigate("/admin/projects");
        }}
        onError={() => console.error("Échec de la connexion Google")}
      />
      {error && (
        <p
          className="text-sm text-red-500"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {error}
        </p>
      )}
    </section>
  );
};

export default LoginPage;
