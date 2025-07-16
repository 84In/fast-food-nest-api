import {
  Address,
  Cart,
  CartItem,
  CartItemIngredient,
  Category,
  Coupon,
  Ingredient,
  Order,
  OrderItem,
  OrderItemIngredient,
  Product,
  ProductVariant,
  Review,
  User,
  UserCoupon,
} from '@/models';
import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';

export const sequelizeConfig = (
  configService: ConfigService,
): SequelizeModuleOptions => ({
  dialect: configService.get<Dialect>('DB_DIALECT'),
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  synchronize: true,
  autoLoadModels: true,
  logging: false,
  models: [
    User,
    Category,
    Product,
    Cart,
    Ingredient,
    Order,
    OrderItem,
    OrderItemIngredient,
    Address,
    ProductVariant,
    CartItem, // Ensure CartItem is included
    CartItemIngredient,
    Coupon,
    UserCoupon,
    Review,
  ], // Adjust the path to your models directory
});
