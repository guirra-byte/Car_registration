import { Car } from "../Model/Car/Car.entity";
import { Cars } from "@prisma/client";

export interface ICarRepository {

  create(name: string, description: string, categoryName: string, categoryDescription: string, categoryId: string): Promise<Cars>;
  findOne(name: string): Promise<Cars | null>;
  findAll(): Promise<Cars[]>;
  remove(carId: string): Promise<void>;

}