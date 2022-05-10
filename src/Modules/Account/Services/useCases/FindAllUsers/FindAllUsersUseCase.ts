import { IUserRepository } from '../../../Repository/IUserRepository';

export class FindAllUsersUseCase {

  constructor(private userRepository: IUserRepository) { }
  async execute() {

    const findAllUsers = await this.userRepository.findAllUsers();
    return findAllUsers;
  }
}
