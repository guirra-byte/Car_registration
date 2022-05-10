import { IUserRepository } from "../IUserRepository";
import { client } from "../../../../../prisma/Client/Client.prisma";
import { User } from "../../model/User/User";

export class UserRepository implements IUserRepository {

  constructor() { }

  private static INSTANCE: UserRepository;

  public static getInstance(): UserRepository {

    if (!UserRepository.INSTANCE) {

      UserRepository.INSTANCE = new UserRepository();
    }

    return UserRepository.INSTANCE;
  }

  async create(name: string, email: string, password: string, driver_license: string) {

    const newUserProps = {

      name,
      email,
      password,
      driver_license
    }

    const newUser = new User(newUserProps);

    const createUserClient = await client.users.create({

      data: {

        name,
        email,
        password,
        driver_license
      }
    });

    return createUserClient;
  }

  async findOne(email: string) {

    const findOneUser = await client.users.findFirst({ where: { email: email } });
    return findOneUser;
  }

  async findAllUsers() {

    const findAllUsers = await client.users.findMany();
    return findAllUsers;
  }
}
