import { response, Router } from 'express';

import { createUserController } from '../Modules/Account/Services/useCases/CreateUser';
import { findAllUsersController } from '../Modules/Account/Services/useCases/FindAllUsers/index';
import { turnUserAdminController } from '../Modules/Account/Services/useCases/TurnUserAdmin/index';

import { VerifyUserAlreadyExistsMiddleware } from '../Middleware/VerifyUserAlreadyExists';
import { UserAuthTokenVerification as authVerification } from '../Middleware/Token/UserAuthTokenVerify';

const userRoutes = Router();

userRoutes.post('/', VerifyUserAlreadyExistsMiddleware, (request, response) => {

  return createUserController.handle(request, response);
});

userRoutes.get('/', authVerification, (request, response) => {

  return findAllUsersController.handle(request, response);
});

userRoutes.patch('/', authVerification, (request, response) => {

  return turnUserAdminController.handle(request, response)
});

export { userRoutes };