import { Entity } from '../Entity';

type CategoryEntityProps = {

  name: string
  description: string
}

export class Category extends Entity<CategoryEntityProps>{

  constructor(props: CategoryEntityProps) {

    super(props)
  }
}