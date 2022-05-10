import { ICarRepository } from "../../../../Repository/ICarRepository";
import { inject, injectable } from 'tsyringe';

@injectable()
export class RemoveCarUseCase {

  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository) { }

  async execute(carId: string): Promise<void> {

    const verifyCarAlreadyExists = await this.carRepository.findOne(carId);

    if (!verifyCarAlreadyExists) {

      throw new Error('Cannot remove this car');
    }

    const removeCar = await this.carRepository.remove(carId);
    return removeCar;
  }
}