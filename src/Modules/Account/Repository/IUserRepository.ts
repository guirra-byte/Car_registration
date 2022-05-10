

export interface IUserRepository {

  create(name: string, email: string, password: string, driver_license: string): any
  findOne(email: string): any
  findAllUsers(): any


}