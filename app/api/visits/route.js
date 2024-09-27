// app/api/visits/route.js
import { NextResponse } from 'next/server';

let visits = []; // Ceci est un stockage temporaire pour l'exemple

export async function POST(req) {
  const { userId, artId, timestamp } = await req.json();
  visits.push({ userId, artId, timestamp }); // Ajoute la visite à la liste
  console.log('Visite sauvegardée:', { userId, artId, timestamp });
  return NextResponse.json({ message: 'Visite sauvegardée.' });
}
