import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { BasketDevice } from 'src/baskets/baskets-devices.model';
import { Brand } from 'src/brands/brands.model';
import { Rating } from 'src/ratings/ratings.model';
import { Type } from 'src/types/types.model';
import { DeviceInfo } from './devices-info.model';

@Table({ tableName: 'device' })
export class Device extends Model<Device> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'iPhone17', description: 'имя девайса' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: '1714', description: 'имя девайса' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  price: string;

  @ApiProperty({ example: '5', description: 'рейтинг девайса' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  rating: number;

  @ApiProperty({ example: 'img src', description: 'изображение девайса' })
  @Column({ type: DataType.STRING, allowNull: false })
  img: string;

  @ForeignKey(() => Brand)
  @Column({ type: DataType.INTEGER })
  brandId: number;

  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  typeId: number;

  @BelongsTo(() => Type)
  type: Type;

  @BelongsTo(() => Brand)
  brand: Brand;

  @HasMany(() => Rating)
  ratings: Rating[];

  @HasMany(() => BasketDevice)
  basketDevices: BasketDevice[];

  @HasMany(() => DeviceInfo)
  deviceInfo: DeviceInfo[];
}
