import { Request, Response, NextFunction } from 'express';
import { client } from '../../../prisma/Client/Client.prisma';

export async function VerifyUserAlreadyExistsMiddleware(request: Request, response: Response, next: NextFunction) {

  const { email } = request.body;
  const verifyUserAlreadyExistsInClient = await client
    .users
    .findFirst({ where: { email: email } });

  if (verifyUserAlreadyExistsInClient) {

    return response
      .status(400)
      .send();
  }

  next();
}