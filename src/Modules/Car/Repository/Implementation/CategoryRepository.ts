import { Category } from "../../Model/Category/Category.entity";
import { ICategoryRepository } from "../ICategoryRepository";
import { Cars, Categories } from "@prisma/client";
import { client } from "../../../../../prisma/Client/Client.prisma";

export class CategoryRepository implements ICategoryRepository {

  private constructor() { }

  private static INSTANCE: CategoryRepository;

  public static getInstance(): CategoryRepository {

    if (!CategoryRepository.INSTANCE) {

      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
  }

  async create(name: string, description: string): Promise<Categories> {

    const newCategoryProps = {

      name: name,
      description: description
    }

    const newCategory = new Category(newCategoryProps);

    const create = await client.categories.create({

      data: {

        name,
        description,
      }
    });

    return create;
  }

  async findOne(categoryId: string): Promise<(Categories & { car: Cars[]; }) | null> {

    const findOneCategory = await client.categories.findUnique({

      where: { id: categoryId },
      include: {

        car: true
      }
    });

    return findOneCategory;

  }

  async findAll(): Promise<(Categories & { car: Cars[]; })[]> {

    const findAllCategories = await client.categories.findMany({

      include: {

        car: true
      }
    });

    return findAllCategories;
  }

  async remove(categoryId: string): Promise<any> {

    const findAndRemoveCategory = await client.categories.delete({

      where: { id: categoryId }
    })

    return findAndRemoveCategory;
  }
}