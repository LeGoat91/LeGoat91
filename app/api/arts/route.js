import { NextResponse } from 'next/server';

const arts = [
  { id: 1, title: "Mona Lisa", image: "/images/mona-lisa.jpg", description: "Une œuvre d'art célèbre." },
  { id: 2, title: "Starry Night", image: "/images/starry-night.jpg", description: "Un chef-d'œuvre de Van Gogh." },
  { id: 3, title: "The Persistence of Memory", image: "/images/persistence-of-memory.jpg", description: "Une œuvre surréaliste." },
  { id: 4, title: "The Scream", image: "/images/the-scream.jpg", description: "Une icône de l'art moderne." },
  { id: 5, title: "Girl with a pearl earring", image: "/images/girl-with-a-pearl-earring.jpg", description: "Une œuvre de Vermeer." },
];

export async function GET(req) {
  try {
    return NextResponse.json(arts);
  } catch (error) {
    console.error("Erreur lors de la récupération des œuvres : ", error);
    return NextResponse.json({ error: "Erreur lors de la récupération des œuvres." }, { status: 500 });
  }
}
