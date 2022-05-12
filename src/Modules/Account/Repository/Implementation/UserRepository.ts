import { IUserRepository } from "../IUserRepository";
import { client as prismaClient } from "../../../../../prisma/Client/Client.prisma";
import { User } from "../../model/User/User";
import { PrismaClient, Users } from "@prisma/client";
import { IRequestReturn } from "../IUserRepository";

export class UserRepository implements IUserRepository {

  private client: PrismaClient

  constructor() {

    this.client = new PrismaClient();

  }

  private static INSTANCE: UserRepository;

  public static getInstance(): UserRepository {

    if (!UserRepository.INSTANCE) {

      UserRepository.INSTANCE = new UserRepository();
    }

    return UserRepository.INSTANCE;
  }

  async create(name: string, email: string, password: string, driver_license: string): Promise<Users> {

    const newUserProps = {

      name,
      email,
      password,
      driver_license
    }

    const newUser = new User(newUserProps);

    const createUser = await this.client.users.create({

      data: {

        name,
        email,
        password,
        driver_license,
        avatar: "Mabel"
      }
    });

    return createUser;
  }

  async findOne(email: string): Promise<IRequestReturn | null> {

    const findOneUser = await this.client.users.findUnique({ where: { email: email } });
    return findOneUser;
  }

  async findAllUsers(): Promise<Users[]> {

    const findAllUsers = await this.client.users.findMany();
    return findAllUsers;
  }

  async findById(sub: string): Promise<Users | null> {

    const findUserById = await this.client.users.findUnique({ where: { id: sub } });
    return findUserById;
  }

  async turnAdmin(sub: string): Promise<Users> {

    const findAndUpdateUser = await this.client.users.update({
      where: { id: sub },
      data: {

        admin: true
      }
    });

    return findAndUpdateUser;
  }
}
