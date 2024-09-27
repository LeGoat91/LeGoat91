"use client";
import styles from './ArtDetail.module.css'; 

export default function StarryNight() {
  return (
    <div className={styles.container}>
      <h1>Starry Night</h1>
      <img src="/images/starry-night.jpg" alt="Starry Night" className={styles.image} />
      <p className={styles.description}>Un chef-d'œuvre de Van Gogh.</p>
      <button onClick={() => window.history.back()} className={styles.button}>Retour</button>
    </div>
  );
}
