import { Router } from 'express';
import { createUserAuthTokenController } from '../Modules/Account/Services/useCases/Token/Auth/index';
const authRoutes = Router();


authRoutes.post('/session', (request, response) => {

  return createUserAuthTokenController.handle(request, response);

});

export { authRoutes }