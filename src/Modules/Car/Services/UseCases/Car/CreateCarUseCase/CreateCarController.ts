import { container } from 'tsyringe';
import { CreateCarUseCase } from './CreateCarUseCase';
import { Request, Response } from 'express';

export class CreateCarController {

  async handle(request: Request, response: Response) {

    const { name, description, categoryName,
      categoryDescription, categoryId } = request.body;

    try {

      const createCar = container.resolve(CreateCarUseCase);
      await createCar.execute(name, description, categoryName, categoryDescription, categoryId);

      return response.status(201).send(createCar);
    }

    catch (exception) {

      return response.status(400).send(exception);
    }
  }
}
