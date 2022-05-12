import { AppError } from "../../../../../Errors/AppError";
import { IUserRepository } from "../../../Repository/IUserRepository";

export class TurnUserAdminUseCase {

  constructor(private userRepository: IUserRepository) { }

  async execute(sub: string) {

    const findUser = await this.userRepository.findById(sub);

    if (!findUser) {

      throw new AppError("This user does exists!");
    }

    const turnAdmin = await this.userRepository.turnAdmin(sub);
    return turnAdmin;
  }
}