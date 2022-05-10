import { Request, Response, NextFunction } from 'express';
import { client } from '../../../prisma/Client/Client.prisma'

async function verifyCategory(request: Request, response: Response, next: NextFunction) {

  const { name } = request.body;

  const findCategory = await client.categories.findFirst({

    where: { name: name },
    include: {

      car: true
    }
  });

  if (findCategory) {

    return response.status(400).json({ error: "This Category Already Exists" });
  }

  next();
}

export { verifyCategory };