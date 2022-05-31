import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { TypesService } from './types.service';

@Controller('api/types')
export class TypesController {
  constructor(private typesService: TypesService) {}
  @Post()
  createType(@Body() dto: CreateTypeDto) {
    return this.typesService.createType(dto);
  }

  @Get()
  getAllTypes() {
    return this.typesService.getAllTypes();
  }
}
