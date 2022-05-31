import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import { Type } from './types.model';
import { TypeBrand } from './types-brands.model';
import { Brand } from 'src/brands/brands.model';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  providers: [TypesService],
  controllers: [TypesController],
  imports: [SequelizeModule.forFeature([Type, Brand, TypeBrand]), BrandsModule],
})
export class TypesModule {}
