import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Device } from 'src/devices/devices.model';
import { User } from 'src/users/users.model';

@Table({ tableName: 'rating' })
export class Rating extends Model<Rating> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '5', description: 'рейтинг девайса' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  rate: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => Device)
  @Column({ type: DataType.INTEGER })
  deviceId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Device)
  device: Device;
}
