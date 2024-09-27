import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, firstName } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user || user.firstName !== firstName) {
        return res.status(404).json({ error: 'Utilisateur non trouvé ou prénom incorrect' });
      }

      res.status(200).json({ message: 'Connexion réussie', user });
    } catch (error) {
      console.error("Erreur lors de la connexion: ", error);
      res.status(500).json({ error: 'Erreur lors de la connexion' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
