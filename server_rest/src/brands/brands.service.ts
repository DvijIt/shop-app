import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Brand } from './brands.model';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand) private brandRepository: typeof Brand) {}

  async createBrand(dto: CreateBrandDto) {
    const type = await this.brandRepository.create(dto);

    return type;
  }

  async getAllBrands() {
    const types = await this.brandRepository.findAll();

    return types;
  }

  async getBrandByName(brandName: string) {
    const type = await this.brandRepository.findOne({
      where: { name: brandName },
    });

    return type;
  }

  async getBrandById(id: string) {
    const type = await this.brandRepository.findOne({
      where: { id },
    });

    return type;
  }
}
