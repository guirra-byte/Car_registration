import { Entity } from '../Entity';

type UserProps = {

  name: string
  email: string
  password: string
  driver_license: string
}

export class User extends Entity<UserProps>{

  constructor(props: UserProps) {

    super(props)
  }
}