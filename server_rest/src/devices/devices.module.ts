import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { DevicesController } from './devices.controller';
import { Device } from './devices.model';
import { DevicesService } from './devices.service';

@Module({
  providers: [DevicesService, FilesService],
  controllers: [DevicesController],
  imports: [SequelizeModule.forFeature([Device])],
})
export class DevicesModule {}
