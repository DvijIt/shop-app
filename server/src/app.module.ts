import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { BasketController } from './basket/basket.controller';
import { BasketModule } from './basket/basket.module';
import { DeviceService } from './device/device.service';
import { RatingModule } from './rating/rating.module';
import { RatingService } from './rating/rating.service';
import { RatingController } from './rating/rating.controller';
import { TypeModule } from './type/type.module';
import { TypeService } from './type/type.service';
import { TypeController } from './type/type.controller';
import { BrandModule } from './brand/brand.module';
import { BrandService } from './brand/brand.service';
import { BrandController } from './brand/brand.controller';
import { DeviceModule } from './device/device.module';
import { Rating } from './rating/rating.model';
import { Basket } from './basket/basket.model';
import { Brand } from './brand/brand.model';
import { Type } from './type/type.model';
import { Device } from './device/device.model';
import { BasketDevice } from './basket/basket-device.model';
import { DeviceInfo } from './device/device-info.model';
import { TypeBrand } from './type/type-brand.model';

@Module({
  controllers: [
    AuthController,
    BasketController,
    BrandController,
    TypeController,
    RatingController,
  ],
  providers: [DeviceService, BrandService, TypeService, RatingService],
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
    BasketModule,
    DeviceModule,
    BrandModule,
    TypeModule,
    RatingModule,
  ],
})
export class AppModule {}
