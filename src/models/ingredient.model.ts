import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { CartItemIngredient } from './cart-item-ingredient.model';
import { Category } from './category.model';
import { OrderItemIngredient } from './order-item-ingredient.model';

@Table
export class Ingredient extends Model<Ingredient> {
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  name: string;
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  imageUrl: string;
  @Column({
    allowNull: true,
    type: DataTypes.TEXT,
  })
  description: string;
  @Column({
    defaultValue: 0,
    type: DataTypes.INTEGER,
  })
  price: number;
  @Column({
    defaultValue: true,
    type: DataTypes.BOOLEAN,
  })
  isActive: boolean;

  @Column({
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  })
  isRequired: boolean;
  @ForeignKey(() => Category)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  //relationships
  // Add any relationships here if needed, e.g., associations with other models
  @HasMany(() => OrderItemIngredient)
  orderItemIngredients: OrderItemIngredient[]; // Assuming an ingredient can be part of multiple
  @HasMany(() => CartItemIngredient)
  cartItemIngredients: CartItemIngredient[];
}
