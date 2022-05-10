import { Car } from "../../Model/Car/Car.entity";
import { ICarRepository } from "../ICarRepository";
import { client } from '../../../../../prisma/Client/Client.prisma';
import { Cars, PrismaClient } from "@prisma/client";

export class CarRepository implements ICarRepository {

  constructor() { }

  async create(name: string, description: string): Promise<any> {


    const newCarProps = {

      name: name,
      description: description

    }

    const newCar = new Car(newCarProps);

    const car = await client.cars.create({

      data: {

        name,
        description,
        category_id_fk: {

          create: {

            name,
            description
          }
        }
      }
    });

    return car;

  }

  async findOne(carId: string): Promise<Cars | null> {

    const carName = await client.cars.findUnique({

      where: { id: carId },

      include: {

        category_id_fk: true
      }
    })

    return carName;
  }

  async findAll(): Promise<Cars[]> {

    const findAllCars = await client.cars.findMany({

      include: {

        category_id_fk: true
      }
    })

    return findAllCars;
  }

  async remove(carId: string): Promise<any> {

    const removeCar = await client.cars.delete({

      where: { id: carId }
    })

    return removeCar;
  }
}