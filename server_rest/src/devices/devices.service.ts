import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { info } from 'console';
import { FilesService, FileType } from 'src/files/files.service';
import { CreateDeviceDto } from './create-device.dto';
import { DeviceInfo } from './devices-info.model';
import { Device } from './devices.model';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Device) private deviceRepository: typeof Device,
    private filesService: FilesService,
  ) {}

  async createDevice(dto: CreateDeviceDto, thumbnail) {
    try {
      const thumbnailPath = this.filesService.createFile(
        FileType.IMAGE,
        thumbnail,
      );

      const device = await this.deviceRepository.create({
        ...dto,
        thumbnail: thumbnailPath,
      });

      const { info } = dto;

      if (info) {
        info.forEach(({ title, description, deviceId }) => {
          DeviceInfo.create({ title, description, deviceId });
        });
      }

      return device;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getDeviceById(id: string) {
    const device = await this.deviceRepository.findOne({ where: { id } });

    return device;
  }

  async getAllDevices() {
    const devices = await this.deviceRepository.findAll();

    return devices;
  }
}
