import { Users } from "@prisma/client";


export interface IRequestReturn {

  id: string;
  name: string;
  email: string;
  password: string;
  driver_license: string;
  avatar: string;
  admin: boolean;

}

export interface IUserRepository {

  create(name: string, email: string, password: string, driver_license: string): Promise<IRequestReturn>
  findOne(email: string): Promise<IRequestReturn | null>
  findAllUsers(): Promise<IRequestReturn[]>
  findById(sub: string): Promise<IRequestReturn | null>
  turnAdmin(sub: string): Promise<IRequestReturn>


}