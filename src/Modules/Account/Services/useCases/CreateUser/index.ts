import { UserRepository } from "../../../Repository/Implementation/UserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };