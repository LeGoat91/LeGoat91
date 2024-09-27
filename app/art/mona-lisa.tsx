"use client";

export default function MonaLisa() {
  const art = {
    title: "Mona Lisa",
    image: "/images/mona-lisa.jpg", // Vérifie que ce chemin vers l'image est correct
    description: "Une œuvre d'art célèbre."
  };

  return (
    <div>
      <h1>{art.title}</h1>
      <img src={art.image} alt={art.title} style={{ width: '300px' }} />
      <p>{art.description}</p>
    </div>
  );
}
