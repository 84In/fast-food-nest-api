import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from './product.model';
import { OrderItem } from './order-item.model';
import { CartItem } from './cart-item.model';

export enum ProductVariantSize {
  SMALL = '15cm',
  MEDIUM = '20cm',
  LARGE = '25cm',
}
export enum ProductVariantType {
  THIN = 'Mỏng',
  NORMAL = 'Bình thường',
  THICK = 'Dày',
}
@Table
export class ProductVariant extends Model<ProductVariant> {
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  name: string;
  @Column({
    allowNull: false,
    type: DataTypes.ENUM(...Object.values(ProductVariantSize)),
  })
  size: ProductVariantSize;
  @Column({
    allowNull: false,
    type: DataTypes.ENUM(...Object.values(ProductVariantType)),
  })
  type: ProductVariantType;
  @Column({
    defaultValue: 0,
    type: DataTypes.INTEGER,
  })
  modìfierPrice: number;
  @Column({
    defaultValue: true,
    type: DataTypes.BOOLEAN,
  })
  isActive: boolean;

  @ForeignKey(() => Product)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  productId: number;
  @BelongsTo(() => Product)
  product: Product;

  //relationships
  // Add any relationships here if needed, e.g., associations with other models
  @HasMany(() => OrderItem)
  orderItems: OrderItem[]; // Assuming a product variant can be part of multiple order
  @HasMany(() => CartItem)
  cartItems: CartItem[];
}
