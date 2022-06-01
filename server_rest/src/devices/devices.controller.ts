import { Controller, Get } from '@nestjs/common';

@Controller('api/devices')
export class DevicesController {
  @Get()
  getAllDevices() {
    return ['device 1', 'device 2', 'device 3'];
  }
}
