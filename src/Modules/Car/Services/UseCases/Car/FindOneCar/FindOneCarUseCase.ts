import { ICarRepository } from "../../../../Repository/ICarRepository";
import { inject, injectable } from 'tsyringe';
import { Cars } from "@prisma/client";

@injectable()
export class FindOneCarUseCase {

  constructor(
    @inject('CarRepository')
    private carRepository: ICarRepository) { }

  async execute(carId: string): Promise<Cars | null> {

    const findCar = await this.carRepository.findOne(carId);
    return findCar;
  }
}