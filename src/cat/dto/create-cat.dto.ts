import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateCatDto{

  @IsString()
  @IsNotEmpty()
  name: string

  @IsPositive()
  age: number

  @IsString()
  @IsNotEmpty()
  colour: string
}
