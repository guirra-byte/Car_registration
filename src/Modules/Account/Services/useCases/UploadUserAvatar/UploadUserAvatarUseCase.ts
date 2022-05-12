import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../../Repository/IUserRepository';

interface IUploadUserAvatarProps {

  user_id: string
  avatarFile: string
}

@injectable()
export class UpdateUserAvatarUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository) { }

  async execute({ user_id, avatarFile }: IUploadUserAvatarProps) {

    const user = await this.userRepository.findById(user_id);
    user.avatar = avatarFile;

    await this.userRepository.create(user);

  }
}