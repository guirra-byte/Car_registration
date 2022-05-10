import { CreateCategoryController } from "./CreateCategoryController";
import { CategoryRepository } from "../../../../Repository/Implementation/CategoryRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };