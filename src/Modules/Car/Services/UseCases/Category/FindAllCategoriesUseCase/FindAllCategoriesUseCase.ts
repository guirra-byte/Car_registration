import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../../../../Repository/ICategoryRepository';
import { Categories } from '@prisma/client';
import { Cars } from '@prisma/client';

export class FindAllCategoryUseCase {

  constructor(private categoryRepository: ICategoryRepository) { }

  async execute(): Promise<(Categories & { car: Cars[]; })[]> {

    const returnAllCategories = await this.categoryRepository.findAll();
    return returnAllCategories;
  }
}