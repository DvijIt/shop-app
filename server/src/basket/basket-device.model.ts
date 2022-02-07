import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Device } from 'src/device/device.model';
import { Basket } from './basket.model';

@Table({ tableName: 'basket' })
export class BasketDevice extends Model<BasketDevice> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'id девайса' })
  @ForeignKey(() => Device)
  @Column({ type: DataType.INTEGER })
  deviceId: number;

  @ApiProperty({ example: 1, description: 'id корзины' })
  @ForeignKey(() => Basket)
  @Column({ type: DataType.INTEGER })
  basketId: number;

  @BelongsTo(() => Basket)
  basket: Basket;

  @BelongsTo(() => Device)
  device: Device;
}
