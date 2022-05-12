import { Request, Response } from 'express';
import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

export class TurnUserAdminController {

  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  async handle(request: Request, response: Response) {

    const { id } = request.body;

    const turnAdmin = await this.turnUserAdminUseCase.execute(id);

    return response
      .status(200)
      .send(turnAdmin);
  }
}