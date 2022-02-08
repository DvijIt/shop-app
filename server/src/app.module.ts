import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthController } from './auth/auth.controller';
import { BasketsController } from './baskets/baskets.controller';
import { RatingsController } from './ratings/ratings.controller';
import { TypesController } from './types/types.controller';
import { BrandsController } from './brands/brands.controller';

import { DevicesService } from './devices/devices.service';
import { RatingsService } from './ratings/ratings.service';
import { TypesService } from './types/types.service';
import { BrandsService } from './brands/brands.service';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { BasketsModule } from './baskets/baskets.module';
import { RatingsModule } from './ratings/ratings.module';
import { TypesModule } from './types/types.module';
import { BrandsModule } from './brands/brands.module';
import { DevicesModule } from './devices/devices.module';

import { User } from './users/users.model';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { Rating } from './ratings/ratings.model';
import { Basket } from './baskets/baskets.model';
import { Brand } from './brands/brands.model';
import { Type } from './types/types.model';
import { Device } from './devices/devices.model';
import { BasketDevice } from './baskets/baskets-devices.model';
import { DeviceInfo } from './devices/devices-info.model';
import { TypeBrand } from './types/types-brands.model';

@Module({
  controllers: [
    AuthController,
    BasketsController,
    BrandsController,
    TypesController,
    RatingsController,
  ],
  providers: [DevicesService, BrandsService, TypesService, RatingsService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRESS_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [
        User,
        Role,
        UserRoles,
        Basket,
        BasketDevice,
        Brand,
        Type,
        TypeBrand,
        Device,
        DeviceInfo,
        Rating,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    BasketsModule,
    DevicesModule,
    BrandsModule,
    TypesModule,
    RatingsModule,
  ],
})
export class AppModule {}
