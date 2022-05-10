import { container } from "tsyringe";
import { FindOneCarUseCase } from "./FindOneCarUseCase";
import { Request, Response } from 'express';

export class FindOneCarController {

  async handle(request: Request, response: Response) {

    const { carId } = request.params;

    try {

      const findOneCar = container.resolve(FindOneCarUseCase);
      await findOneCar.execute(carId);

      return response.status(200).send(findOneCar);
    }

    catch (exception) {

      return response.status(400).send(exception);
    }
  }

}