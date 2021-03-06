import { Request, Response, NextFunction } from 'express';
import { client } from '../../prisma/Client/Client.prisma';
import { AppError } from '../Errors/AppError';

async function verifyCategory(request: Request, response: Response, next: NextFunction) {

  const { name } = request.body;

  const findCategory = await client.categories.findFirst({

    where: { name: name },
    include: {

      car: true
    }
  });

  if (findCategory) {

    throw new AppError("This Category already Exists!")
  }

  next();
}

export { verifyCategory };