import { Controller, Get, Post } from '@nestjs/common';
import { TypesService } from './types.service';

@Controller('api/types')
export class TypesController {
  constructor(private typesService: TypesService) {}
  @Get()
  getAllTypes() {
    return 'qwe';
  }
}
