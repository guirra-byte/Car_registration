import { Cars } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { ICarRepository } from '../../../../Repository/ICarRepository';
import { ICategoryRepository } from '../../../../Repository/ICategoryRepository';

@injectable()
export class CreateCarUseCase {

  constructor(
    @inject('CarRepository')
    @inject('CategoryRepository')
    private carRepository: ICarRepository,
    private categoryRepository: ICategoryRepository
  ) { }

  async execute(name: string, description: string, categoryName: string, categoryDescription: string, categoryId: string): Promise<Cars> {

    const verifyCategoryAlreadyExists = await this.categoryRepository.findOne(categoryId);

    if (!verifyCategoryAlreadyExists) {

      throw new Error('Category not exists');
    }

    const createCar = await this
      .carRepository
      .create(name, description, categoryName, categoryDescription, categoryId);

    return createCar;



  }

}