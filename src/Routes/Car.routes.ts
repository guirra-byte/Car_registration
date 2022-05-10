import { Router } from 'express';

import { CreateCarController } from '../Modules/Car/Services/UseCases/Car/CreateCarUseCase/CreateCarController';
import { FindOneCarController } from '../Modules/Car/Services/UseCases/Car/FindOneCar/FindOneCarController';
import { FindAllCarsController } from '../Modules/Car/Services/UseCases/Car/FindAllCars/FindAllCarsController';
import { RemoveCarController } from '../Modules/Car/Services/UseCases/Car/RemoveCarUseCase/RemoveCarController';

const carRoutes = Router();

const createCarController = new CreateCarController();
carRoutes.post('/', createCarController.handle);

const findOneCarController = new FindOneCarController();
carRoutes.get('/:carId', findOneCarController.handle);

const findAllCarsController = new FindAllCarsController();
carRoutes.get('/', findAllCarsController.handle);

const removeCarController = new RemoveCarController();
carRoutes.delete('/:carId', removeCarController.handle);

export { carRoutes };