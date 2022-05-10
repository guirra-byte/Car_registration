import { container } from "tsyringe";
import { FindAllCarsUseCase } from "./FindAllCarsUseCase";
import { Request, Response } from 'express';

export class FindAllCarsController {

  async handle(request: Request, response: Response) {

    try {

      const findAllCars = container.resolve(FindAllCarsUseCase);
      await findAllCars.execute();

      return response.status(200).send(findAllCars);
    }
    catch (exception) {

      return response.status(400).send(exception);
    }
  }
}