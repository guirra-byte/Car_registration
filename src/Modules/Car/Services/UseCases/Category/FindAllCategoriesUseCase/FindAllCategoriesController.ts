import { container } from "tsyringe";
import { FindAllCategoryUseCase } from "./FindAllCategoriesUseCase";
import { Request, Response } from 'express';

export class FindAllCategoryController {

  async handle(request: Request, response: Response) {

    try {

      const findAllCategories = container.resolve(FindAllCategoryUseCase);
      const allCategories = await findAllCategories.execute();

      return response.status(200).send(allCategories);
    }

    catch (exception) {

      return response.status(400).send(exception);
    }
  }
}