import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {

  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(request: Request, response: Response) {

    const { name, email, password, driver_license } = request.body;


    const createUser = await this
      .createUserUseCase
      .execute(name, email, password, driver_license);

    return response.status(201).send(createUser);

  }
}
