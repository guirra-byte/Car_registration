import { UserRepository } from "../../../Repository/Implementation/UserRepository";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";
import { TurnUserAdminController } from "./TurnUserAdminController";

const userRepository = UserRepository.getInstance();

const turnUserAdminUseCase = new TurnUserAdminUseCase(userRepository);

const turnUserAdminController = new TurnUserAdminController(turnUserAdminUseCase);

export { turnUserAdminController }