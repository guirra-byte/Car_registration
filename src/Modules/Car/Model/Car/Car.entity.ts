import { Entity } from "../Entity";

type CarEntityProps = {

  name: string
  description: string
}

export class Car extends Entity<CarEntityProps>{

  constructor(props: CarEntityProps) {

    super(props)
  }
}