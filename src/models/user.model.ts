import { DataTypes } from 'sequelize';
import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Address } from './address.model';
import { Order } from './order.model';
import { Cart } from './cart.model';
import { UserCoupon } from './user-coupon.model';
import { Review } from './review.model';

export enum UserRole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}

@Table
export class User extends Model<User> {
  @Column({
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  })
  email: string;
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  password: string;
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  name: string;
  @Column({
    allowNull: true,
    type: DataTypes.STRING,
  })
  avatar: string;
  @Column({
    allowNull: true,
    type: DataTypes.STRING,
  })
  phone: string;
  @Column({
    allowNull: false,
    type: DataTypes.ENUM(...Object.values(UserRole)),
    defaultValue: UserRole.CUSTOMER,
  })
  role: UserRole;
  @Column({
    allowNull: true,
    type: DataTypes.STRING,
  })
  provider: string;

  //relationships
  // Add any relationships here if needed, e.g., associations with other models
  @HasMany(() => Address)
  addresses: Address[]; // Assuming a user can have multiple addresses
  @HasMany(() => Order)
  orders: Order[]; // Assuming a user can have multiple carts
  @HasOne(() => Cart)
  cart: Cart; // Assuming a user can have one active cart
  @HasMany(() => UserCoupon)
  coupons: UserCoupon[];
  @HasMany(() => Review)
  reviews: Review[];
}
