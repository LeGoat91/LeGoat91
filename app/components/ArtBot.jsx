// app/components/ArtBot.jsx
"use client";

import { useEffect, useState } from 'react';

export default function ArtBot() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const res = await fetch('/api/arts');
        const data = await res.json();
        setArts(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des arts:', error);
      }
    };
    
    fetchArts();
  }, []);

  const handleArtClick = async (artId) => {
    const userId = 'user123'; // Remplace par l'identifiant de l'utilisateur connecté
    const currentTime = new Date().toISOString();

    // Enregistrement de la visite en base de données
    await fetch('/api/visits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, artId, timestamp: currentTime }),
    });

    // Rediriger vers la page de détails de l'œuvre
    window.location.href = `/art/${artId}`;
  };

  return (
    <div>
      <h2>Œuvres disponibles</h2>
      <ul>
        {arts.map(art => (
          <li key={art.id}>
            <h3>{art.title}</h3>
            <p>{art.description}</p>
            <button onClick={() => handleArtClick(art.id)}>Voir Détails</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
