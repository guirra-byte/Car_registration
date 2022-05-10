import { response, Router } from 'express';
import { createCategoryController } from '../Modules/Car/Services/UseCases/Category/CreateCategoryUseCase';

import { verifyCategory } from './Middleware/VerifyCategoryAlreadyExists';

const categoryRoutes = Router();

categoryRoutes.post('/', verifyCategory, (request, response) => {

  return createCategoryController.handle(request, response)
});

// const findOneCategoryController = new FindOneCategoryController();

// categoryRoutes.get('/:categoryId', findOneCategoryController.handle);

// const findAllCategoriesController = new FindAllCategoryController();

// categoryRoutes.get('/', (request, response) => {

//   return findAllCategoriesController.handle(request, response);
// });

export { categoryRoutes };