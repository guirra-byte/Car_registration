import { inject, injectable } from 'tsyringe';
import { ICarRepository } from '../../../../Repository/ICarRepository';
import { Cars } from '@prisma/client';

@injectable()
export class FindAllCarsUseCase {

  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository
  ) { }

  async execute(): Promise<Cars[]> {

    const findAllCars = await this.carRepository.findAll()
    return findAllCars;
  }
}