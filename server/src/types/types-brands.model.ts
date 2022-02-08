import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Brand } from 'src/brands/brands.model';
import { Type } from './types.model';

@Table({ tableName: 'type_brand' })
export class TypeBrand extends Model<TypeBrand> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Type)
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;

  @ForeignKey(() => Brand)
  @Column({ type: DataType.INTEGER })
  userId: number;
}
