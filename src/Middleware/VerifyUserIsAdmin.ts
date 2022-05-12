import { Request, Response, NextFunction } from "express";
import { client } from "../../prisma/Client/Client.prisma";
import { AppError } from "../Errors/AppError";

export async function VerifyUserIsAdmin(request: Request, response: Response, next: NextFunction) {

  const user_id = request.user.id;

  const findUser = await client
    .users
    .findUnique({ where: { id: user_id } });

  if (!findUser) {

    throw new AppError("This user does exists!")
  }

  if (findUser.admin !== true) {

    throw new AppError("Access danied!")
  }

  next();

}