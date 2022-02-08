import { Controller, Get, Post } from '@nestjs/common';
import { TypesService } from './types.service';

@Controller('api/type')
export class TypesController {
  constructor(private typesService: TypesService) {}
  @Get()
  getAllTypes() {
    return 'qwe';
  }
}
