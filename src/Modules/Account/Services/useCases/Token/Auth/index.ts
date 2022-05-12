import { UserRepository } from "../../../../Repository/Implementation/UserRepository";
import { CreateAuthUserTokenUseCase } from "./CreateAuthUserTokenUseCase";
import { CreateAuthUserTokenController } from "./CreateAuthUserTokenController";

const userRepository = UserRepository.getInstance();

const createUserAuthTokenUseCase = new CreateAuthUserTokenUseCase(userRepository);

const createUserAuthTokenController = new CreateAuthUserTokenController(createUserAuthTokenUseCase);

export { createUserAuthTokenController }