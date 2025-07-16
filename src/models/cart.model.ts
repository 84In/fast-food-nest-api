import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { CartItem } from './cart-item.model';

@Table
export class Cart extends Model<Cart> {
  @ForeignKey(() => User)
  @Column({
    allowNull: true,
    type: DataTypes.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  //relationships with CartItem can be added here if needed
  // For example, if you want to define a one-to-many relationship with CartItem:
  @HasMany(() => CartItem)
  cartItems: CartItem[];
}
