import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { CartItem } from './cart-item.model';
import { Ingredient } from './ingredient.model';

@Table
export class CartItemIngredient extends Model<CartItemIngredient> {
  @ForeignKey(() => CartItem)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  cartItemId: number;

  @ForeignKey(() => Ingredient)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  ingredientId: number;

  @BelongsTo(() => CartItem)
  cartItem: CartItem;
  @BelongsTo(() => Ingredient)
  ingredient: Ingredient;

  @Column({
    defaultValue: 1,
    type: DataTypes.INTEGER,
  })
  quantity: number;
}
