import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { passwordTokenAccess as tokenKey } from '../../Modules/Account/Services/useCases/Token/Auth/CreateAuthUserTokenUseCase';
import { UserRepository } from '../../Modules/Account/Repository/Implementation/UserRepository';
import { AppError } from '../../Errors/AppError';

interface IPayloadRequestProps {

  name: string
  email: string
  sub: string
}

export async function UserAuthTokenVerification(request: Request, response: Response, next: NextFunction) {

  const bearerToken = request.headers.authorization;

  if (!bearerToken) {

    throw new AppError("Token is missing!", 401);
  }

  const token = bearerToken.split(" ");
  const authToken = token[1];

  try {

    const verifyAuthToken = verify(authToken, tokenKey) as IPayloadRequestProps;

    const userRepository = new UserRepository();
    const user = await userRepository.findById(verifyAuthToken.sub);

    if (!user) {

      throw new AppError("This user does exists!", 401);
    }

    request.user = { id: verifyAuthToken.sub }

    next();

  }
  catch (exception) {

    throw new AppError("Token is invalid!", 401);
  }


}