"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter();
 
  const handleLoginRedirect = () =>{
    router.push("/login"); 
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button className={styles.loginButton} onClick={handleLoginRedirect}>
          Aller à la page de connexion
        </button>
      </main>
    </div>
  );
}
