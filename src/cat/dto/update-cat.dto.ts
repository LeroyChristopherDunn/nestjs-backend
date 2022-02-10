import { PartialType } from '@nestjs/mapped-types';
import { Cat } from "../entities/cat.entity";

export class UpdateCatDto extends PartialType(Cat) {

}
