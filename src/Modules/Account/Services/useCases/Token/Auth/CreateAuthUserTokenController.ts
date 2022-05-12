import { Request, Response } from 'express';
import { CreateAuthUserTokenUseCase } from './CreateAuthUserTokenUseCase';

export class CreateAuthUserTokenController {

  constructor(private createUserAuthTokenUseCase: CreateAuthUserTokenUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const { email, password } = request.body;

    const createAuthToken = await this
      .createUserAuthTokenUseCase
      .execute({ email, password });

    return response
      .status(201)
      .json({ createAuthToken });
  }
}