import { container } from "tsyringe";
import { FindAllCategoryUseCase } from "./FindAllCategoriesUseCase";
import { Request, Response } from 'express';
import { ICategoryRepository } from "../../../../Repository/ICategoryRepository";

export class FindAllCategoryController {

  constructor(private findAllCategoriesUseCase: FindAllCategoryUseCase) { }

  async handle(request: Request, response: Response) {

    const findAllCategories = await this.findAllCategoriesUseCase.execute();
    return response.status(200).send(findAllCategories);

  }
}