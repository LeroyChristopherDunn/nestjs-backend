import { Injectable } from '@nestjs/common';
import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from "./entities/cat.entity";

@Injectable()
export class CatService {

  private cats: Cat[] = [];

  async create(createCatDto: CreateCatDto) {
    const created = { ...createCatDto, id: this.cats.length.toString() };
    this.cats.push(created);
    return created;
  }

  findAll() {
    return this.cats.map(cat => ({...cat}));
  }

  findOne(id: string) {
    return this.cats.find(cat => cat.id === id);
  }

  update(id: string, updateCatDto: UpdateCatDto) {
    const index = this.cats.findIndex(cat => cat.id === id);
    if (index < 0) return false;
    this.cats[index] = {...this.cats[index], ...updateCatDto, id: this.cats[index].id};
    return true;
  }

  remove(id: string) {
    const index = this.cats.findIndex(cat => cat.id === id);
    if (index < 0) return false;
    this.cats = this.cats.filter(cat => cat.id !== id);
    return true;
  }
}
