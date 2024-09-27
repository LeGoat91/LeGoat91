"use client";
import styles from './ArtDetail.module.css';

export default function Scream() {
  return (
    <div className={styles.container}>
      <h1>The Scream</h1>
      <img src="/images/the-scream.jpg" alt="The Scream" className={styles.image} />
      <p className={styles.description}>Une icône de l'art moderne.</p>
      <button onClick={() => window.history.back()} className={styles.button}>Retour</button>
    </div>
  );
}
