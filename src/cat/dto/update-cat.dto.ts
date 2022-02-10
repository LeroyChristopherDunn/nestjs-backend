import { IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateCatDto {

  @IsString()
  @IsOptional()
  id?: string

  @IsString()
  @IsOptional()
  name?: string

  @IsPositive()
  @IsOptional()
  age?: number

  @IsString()
  @IsOptional()
  colour?: string
}
