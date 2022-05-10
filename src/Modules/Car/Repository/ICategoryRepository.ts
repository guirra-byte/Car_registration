import { Categories } from '@prisma/client';

export interface ICategoryRepository {

  create(name: string, description: string): any;
  findOne(name: string): any;
  findAll(): any;
  remove(categoryId: string): any;
}