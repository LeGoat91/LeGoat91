"use client";
import styles from './ArtDetail.module.css';

export default function GirlWithPearl() {
  return (
    <div className={styles.container}>
      <h1>Girl with a Pearl Earring</h1>
      <img src="/images/girl-with-a-pearl-earring.jpg" alt="Girl with a Pearl Earring" className={styles.image} />
      <p className={styles.description}>Une œuvre de Vermeer.</p>
      <button onClick={() => window.history.back()} className={styles.button}>Retour</button>
    </div>
  );
}
