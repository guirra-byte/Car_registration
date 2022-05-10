import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../../../../Repository/ICategoryRepository';

@injectable()
export class FindOneCategoryUseCase {

  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository) { }

  async execute(categoryId: string) {

    const findCategory = await this.categoryRepository.findOne(categoryId);

    if (!findCategory) {

      throw new Error('This category not exists');
    }

    return findCategory;
  }
}