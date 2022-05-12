import { FindAllUsersUseCase } from "./FindAllUsersUseCase";
import { Request, Response } from 'express';

export class FindAllUsersController {

  constructor(private findAllUsersUseCase: FindAllUsersUseCase) { }

  async handle(request: Request, response: Response) {

    const findAllUsers = await this.findAllUsersUseCase.execute();
    return response.status(200).json({ findAllUsers });
  }
}