import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Order } from './order.model';
import { ProductVariant } from './product-variant.model';
import { Product } from './product.model';
import { OrderItemIngredient } from './order-item-ingredient.model';

@Table
export class OrderItem extends Model<OrderItem> {
  @ForeignKey(() => Order)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  orderId: number;

  @ForeignKey(() => Product)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  productId: number;

  @ForeignKey(() => ProductVariant)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  variantId: number;

  @Column({
    defaultValue: 1,
    type: DataTypes.INTEGER,
  })
  quantity: number;

  @BelongsTo(() => Order)
  order: Order;
  @BelongsTo(() => Product)
  product: Product;
  @BelongsTo(() => ProductVariant)
  variant: ProductVariant;

  //relationships
  // Add any relationships here if needed, e.g., associations with other models
  @HasMany(() => OrderItemIngredient)
  orderItemIngredient: OrderItemIngredient[]; // Assuming an order item can have multiple ingredients
}
