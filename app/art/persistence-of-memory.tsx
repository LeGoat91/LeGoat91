"use client";
import styles from './ArtDetail.module.css';

export default function PersistenceOfMemory() {
  return (
    <div className={styles.container}>
      <h1>The Persistence of Memory</h1>
      <img src="/images/persistence-of-memory.jpg" alt="The Persistence of Memory" className={styles.image} />
      <p className={styles.description}>Une œuvre surréaliste célèbre.</p>
      <button onClick={() => window.history.back()} className={styles.button}>Retour</button>
    </div>
  );
}
