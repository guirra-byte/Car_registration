import { response, Router } from 'express';
import { createUserController } from '../Modules/Account/Services/useCases/CreateUser';
import { VerifyUserAlreadyExistsMiddleware } from './Middleware/VerifyUserAlreadyExists';
import { findAllUsersController } from '../Modules/Account/Services/useCases/FindAllUsers/index';
const userRoutes = Router();




userRoutes.post('/', VerifyUserAlreadyExistsMiddleware, (request, response) => {

  return createUserController.handle(request, response);
});

userRoutes.get('/', (request, response) => {

  return findAllUsersController.handle(request, response);
})

export { userRoutes };