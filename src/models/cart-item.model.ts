import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from './cart.model';
import { Product } from './product.model';
import { ProductVariant } from './product-variant.model';
import { CartItemIngredient } from './cart-item-ingredient.model';

@Table
export class CartItem extends Model<CartItem> {
  @ForeignKey(() => Cart)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  cartId: number;

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

  @BelongsTo(() => Cart)
  cart: Cart;
  @BelongsTo(() => Product)
  product: Product;
  @BelongsTo(() => ProductVariant)
  variant: ProductVariant;

  //relationships
  @HasMany(() => CartItemIngredient)
  cartItemIngredients: CartItemIngredient[];
}
