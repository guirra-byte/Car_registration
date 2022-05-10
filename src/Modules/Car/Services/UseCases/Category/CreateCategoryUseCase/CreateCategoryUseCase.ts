import { ICategoryRepository } from '../../../../Repository/ICategoryRepository';

export class CreateCategoryUseCase {

  constructor(private categoryRepository: ICategoryRepository) { }

  async execute(name: string, description: string) {

    const createCategory = await this.categoryRepository.create(name, description);
    return createCategory;
  }
}