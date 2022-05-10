import { IUserRepository } from "../../../Repository/IUserRepository";
import { hash } from 'bcryptjs';

export class CreateUserUseCase {

  constructor(private userRepository: IUserRepository) { }

  async execute(name: string, email: string, pass: string, driver_license: string) {

    const passwordHash = await hash(pass, 8);

    const passHash = {

      password: passwordHash
    }

    const createUser = await this
      .userRepository
      .create(name, email, passHash.password, driver_license);

    return createUser;
  }
}