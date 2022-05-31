import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('api/brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}
  @Post()
  createType(@Body() dto: CreateBrandDto) {
    return this.brandsService.createBrand(dto);
  }

  @Get()
  getAllTypes() {
    return this.brandsService.getAllBrands();
  }

  @Get('/:id')
  getBrandById(@Param('name') name: string) {
    return this.brandsService.getBrandByName(name);
  }
}
