import { IUserRepository } from '../../../../Repository/IUserRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../../../Errors/AppError';

interface IAuthUserRequestProps {

  email: string
  password: string
}

interface IAuthUserReturn {

  user: {
    name: string,
    email: string
  },
  token: string
}

export const passwordTokenAccess = "b6dfe4d9a02400120ef43879c1ec826e";

export class CreateAuthUserTokenUseCase {

  constructor(private userRepository: IUserRepository) { }

  async execute({ email, password }: IAuthUserRequestProps): Promise<IAuthUserReturn> {

    const user = await this
      .userRepository
      .findOne(email);

    if (!user) {

      throw new AppError("Email are incorrect!");
    }

    const passwordComparison = await compare(password, user.password);

    if (!passwordComparison) {

      throw new AppError("Password are incorrect!");
    }

    const token = sign({}, passwordTokenAccess, {

      subject: user.id,
      expiresIn: "1d"
    });

    const propsTokenReturn: IAuthUserReturn = {

      token,
      user: {

        name: user.name,
        email: user.email
      },


    }

    return propsTokenReturn;
  }
}
