import { Request, Response } from 'express';
import { UpdateUserAvatarUseCase } from './UploadUserAvatarUseCase';

export class UploadUserAvatarController {

  constructor(private uploadUserAvatarUseCase: UpdateUserAvatarUseCase) { }

  async handle(request: Request, response: Response) {

    const user_id = request.user.id;
    const avatarFile = "Mabel";

    const avatar = await this.uploadUserAvatarUseCase.execute({ user_id, avatarFile });

    return response
      .status(201)
      .send();
  }
}