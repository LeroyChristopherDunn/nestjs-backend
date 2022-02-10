import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class Cat {

  @IsString()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsPositive()
  age: number

  @IsString()
  @IsNotEmpty()
  colour: string
}
