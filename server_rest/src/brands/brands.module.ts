import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { Brand } from './brands.model';
import { Type } from 'src/types/types.model';
import { TypeBrand } from 'src/types/types-brands.model';

@Module({
  providers: [BrandsService],
  controllers: [BrandsController],
  imports: [SequelizeModule.forFeature([Brand, Type, TypeBrand])],
  exports: [BrandsService],
})
export class BrandsModule {}
