import { container } from "tsyringe";
import { RemoveCarUseCase } from "./RemoveCarUseCase";
import { Request, response, Response } from 'express';

export class RemoveCarController {

  async handle(request: Request, response: Response) {

    const { carId } = request.params;

    try {

      const findAndRemoveCar = container.resolve(RemoveCarUseCase);
      findAndRemoveCar.execute(carId);

      return response.status(204).send(findAndRemoveCar);
    }

    catch (exception) {

      return response.status(400).send(exception);
    }
  }
}