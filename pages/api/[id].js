import { NextResponse } from 'next/server';

const arts = [
  { id: 1, title: "Mona Lisa", image: "/images/mona-lisa.jpg", description: "Une œuvre d'art célèbre." },
  { id: 2, title: "Starry Night", image: "/images/starry-night.jpg", description: "Un chef-d'œuvre de Van Gogh." },
  { id: 3, title: "The Persistence of Memory", image: "/images/persistence-of-memory.jpg", description: "Une œuvre surréaliste." },
  { id: 4, title: "The Scream", image: "/images/the-scream.jpg", description: "Une icône de l'art moderne." },
  { id: 5, title: "Girl with a Pearl Earring", image: "/images/girl-with-a-pearl-earring.jpg", description: "Une œuvre de Vermeer." },
];

export async function GET(req, { params }) {
  const { id } = params;  // Récupère l'ID depuis l'URL

  // Recherche l'œuvre d'art correspondant à l'ID
  const art = arts.find((art) => art.id === parseInt(id));

  // Si l'œuvre n'est pas trouvée, retourne une erreur 404
  if (!art) {
    return NextResponse.json({ error: "Œuvre non trouvée" }, { status: 404 });
  }

  // Retourne l'œuvre trouvée
  return NextResponse.json(art);
}
