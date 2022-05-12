import { response, Router } from 'express';
import { createCategoryController } from '../Modules/Car/Services/UseCases/Category/CreateCategoryUseCase';

import { verifyCategory } from '../Middleware/VerifyCategoryAlreadyExists';
import { UserAuthTokenVerification as authVerification } from '../Middleware/Token/UserAuthTokenVerify';
import { VerifyUserIsAdmin as verifyUserIsAdmin } from '../Middleware/VerifyUserIsAdmin';

const categoryRoutes = Router();

categoryRoutes.post('/', authVerification, verifyUserIsAdmin, verifyCategory, (request, response) => {

  return createCategoryController.handle(request, response);
});

export { categoryRoutes };