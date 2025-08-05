import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category, Ingredient, Product, ProductVariant, User } from '@/models';
import { ProductIngrediant } from '@/models/product-ingrediant.model';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    SequelizeModule.forFeature([
      User,
      Category,
      Product,
      ProductVariant,
      Ingredient,
      ProductIngrediant,
    ]),
  ],
})
export class SeedModule {}
