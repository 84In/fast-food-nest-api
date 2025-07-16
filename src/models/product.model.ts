import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { CartItem } from './cart-item.model';
import { Category } from './category.model';
import { OrderItem } from './order-item.model';
import { Review } from './review.model';

@Table
export class Product extends Model<Product> {
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  name: string;
  @Column({
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  })
  slug: string;
  @Column({
    allowNull: true,
    type: DataTypes.TEXT,
  })
  description: string;
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  basePrice: number;
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  imageUrl: string;
  @Column({
    defaultValue: true,
    type: DataTypes.BOOLEAN,
  })
  isActive: boolean;
  @Column({
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  })
  isFeatured: boolean;

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
  @HasMany(() => OrderItem)
  orderItems: OrderItem[]; // Assuming a product can be part of multiple order items

  @HasMany(() => CartItem)
  cartItems: CartItem[]; // Assuming a product can be part of multiple cart items
  @HasMany(() => Review)
  reviews: Review[];
}
