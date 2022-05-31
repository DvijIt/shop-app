import { CreateTypeDto } from './dto/create-type.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Type } from './types.model';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Type) private typeRepository: typeof Type,
    private brandsService: BrandsService,
  ) {}

  async createType(dto: CreateTypeDto) {
    const type = await this.typeRepository.create(dto);

    return type;
  }

  async getAllTypes() {
    const types = await this.typeRepository.findAll();

    return types;
  }
}
