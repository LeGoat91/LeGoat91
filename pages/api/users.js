import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, firstName } = req.body;

    try {
      
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: "L'email existe déjà" });
      }

     
      const user = await prisma.user.create({
        data: {
          email,
          firstName,
        },
      });

      res.status(201).json(user);
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur: ", error);
      res.status(500).json({ error: 'Erreur lors de la création de l’utilisateur' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
