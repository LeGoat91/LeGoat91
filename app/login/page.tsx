"use client";

import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); 
    const endpoint = isRegistering ? "/api/register" : "/api/auth/login";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, firstName }),
    });

    if (res.ok) {
      console.log(isRegistering ? "Utilisateur enregistré avec succès !" : "Connexion réussie !");
      router.push("/art");
    } else {
      const { error } = await res.json();
      setErrorMessage(error || "Une erreur est survenue");
      console.error(error || "Erreur inconnue");
    }
  };

  return (
    <div className={styles.loginPage}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1>{isRegistering ? "S'enregistrer" : "Connexion"}</h1>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <button type="submit" className={styles.loginButton}>
          {isRegistering ? "S'enregistrer" : "Se connecter"}
        </button>
        <button
          type="button"
          onClick={() => setIsRegistering(!isRegistering)}
          className={styles.toggleButton}
        >
          {isRegistering
            ? "Vous avez déjà un compte ? Connectez-vous"
            : "Pas encore de compte ? Enregistrez-vous"}
        </button>
      </form>
    </div>
  );
}
