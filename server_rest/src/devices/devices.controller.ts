import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateDeviceDto } from './create-device.dto';
import { DevicesService } from './devices.service';

@Controller('api/devices')
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'thumbnail', maxCount: 1 }]))
  createDevice(@UploadedFiles() files, @Body() dto: CreateDeviceDto) {
    const { thumbnail } = files;
    return this.devicesService.createDevice(dto, thumbnail[0]);
  }

  @Get()
  getAllDevices() {
    return this.devicesService.getAllDevices();
  }

  @Get('/:id')
  getDeviceById(@Param('id') id: string) {
    return this.devicesService.getDeviceById(id);
  }
}
