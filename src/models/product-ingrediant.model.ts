import { Ingredient } from './ingredient.model';
import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from './product.model';

@Table
export class ProductIngrediant extends Model<ProductIngrediant> {
  @Column({
    defaultValue: 1,
    type: DataTypes.INTEGER,
  })
  quantity: number;

  @Column({
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  })
  isDefault: boolean;

  @ForeignKey(() => Product)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  productId: number;
  @ForeignKey(() => Ingredient)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  ingredientId: number;

  @BelongsTo(() => Product)
  product: Product;

  @BelongsTo(() => Ingredient)
  ingredient: Ingredient;
}
