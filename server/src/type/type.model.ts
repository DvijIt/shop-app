import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Brand } from 'src/brand/brand.model';
import { Device } from 'src/device/device.model';
import { TypeBrand } from './type-brand.model';

@Table({ tableName: 'type' })
export class Type extends Model<Type> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => Device)
  devices: Device[];

  @BelongsToMany(() => Brand, () => TypeBrand)
  brands: Brand[];
}
