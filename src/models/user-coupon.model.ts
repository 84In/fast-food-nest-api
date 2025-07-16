import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Coupon } from './coupon.model';

@Table
export class UserCoupon extends Model<UserCoupon> {
  @Column({
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  })
  isUsed: boolean;

  @Column({
    type: DataTypes.DATE,
  })
  usedAt: Date;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Coupon)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  couponId: number;

  @BelongsTo(() => Coupon)
  coupon: Coupon;
}
