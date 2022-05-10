import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../../../../Repository/ICategoryRepository';
import { Categories } from '@prisma/client';
import { Cars } from '@prisma/client';

@injectable()
export class FindAllCategoryUseCase {

  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository) { }

  async execute(): Promise<(Categories & { car: Cars[]; })[]> {

    const returnAllCategories = await this.categoryRepository.findAll();
    return returnAllCategories;
  }
}