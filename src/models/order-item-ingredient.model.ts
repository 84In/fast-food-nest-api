import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { OrderItem } from './order-item.model';
import { Ingredient } from './ingredient.model';

@Table
export class OrderItemIngredient extends Model<OrderItemIngredient> {
  @ForeignKey(() => OrderItem)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  orderItemId: number;

  @ForeignKey(() => Ingredient)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  ingredientId: number;

  @BelongsTo(() => OrderItem)
  orderItem: OrderItem;
  @BelongsTo(() => Ingredient)
  ingredient: Ingredient;

  @Column({
    defaultValue: 1,
    type: DataTypes.INTEGER,
  })
  quantity: number;
}
