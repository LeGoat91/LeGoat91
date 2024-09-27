"use client";
import { useEffect, useState } from 'react';
import styles from './ArtList.module.css'; // Importe le fichier CSS pour styliser la liste des œuvres

export default function ArtList() {
  // Liste des œuvres définies directement dans le composant
  const arts = [
    { title: "Mona Lisa", image: "/images/mona-lisa.jpg", description: "Une œuvre d'art célèbre.", url: "/art/mona-lisa" },
    { title: "Starry Night", image: "/images/starry-night.jpg", description: "Un chef-d'œuvre de Van Gogh.", url: "/art/starry-night" },
    { title: "The Persistence of Memory", image: "/images/persistence-of-memory.jpg", description: "Une œuvre surréaliste.", url: "/art/persistence-of-memory" },
    { title: "The Scream", image: "/images/the-scream.jpg", description: "Une icône de l'art moderne.", url: "/art/scream" },
    { title: "Girl with a Pearl Earring", image: "/images/girl-with-a-pearl-earring.jpg", description: "Une œuvre de Vermeer.", url: "/art/girl-with-pearl" }
  ];

  useEffect(() => {
    // Initialisation du chatbot Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "bac81511-af46-48b9-9bd5-69ad05e3a984"; // Remplace par ton identifiant Crisp
    (function() {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();

    // Envoyer un message de bienvenue avec la liste des œuvres dans Crisp
    const sendArtListToCrisp = () => {
      window.$crisp.push(["addMessage", "Bonjour ! Voici la liste des œuvres disponibles :"]);

      // Boucle sur chaque œuvre et envoie les informations dans Crisp
      arts.forEach(art => {
        window.$crisp.push([
          "addMessage",
          `Titre : ${art.title}\nDescription : ${art.description}`,
          {
            buttons: [
              {
                text: "Voir Détails",
                action: () => {
                  window.location.href = art.url; // Rediriger vers la page de détail de l'œuvre
                }
              }
            ]
          }
        ]);
      });
    };

    // Attendre que Crisp soit prêt, puis envoyer la liste des œuvres
    const checkCrispReady = setInterval(() => {
      if (window.$crisp) {
        clearInterval(checkCrispReady);
        sendArtListToCrisp();
      }
    }, 100);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liste des Œuvres</h1>
      <div>
        {arts.map((art) => (
          <div className={styles['art-card']} key={art.title}>
            <img src={art.image} alt={art.title} className={styles['art-image']} />
            <div className={styles['art-info']}>
              <h2>{art.title}</h2>
              <p>{art.description}</p>
              <button 
                className={styles.button} 
                onClick={() => window.location.href = art.url} // Redirection vers la page statique de l'œuvre
              >
                Voir Détails
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
