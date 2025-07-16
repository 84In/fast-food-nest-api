import { DataTypes } from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { UserCoupon } from './user-coupon.model';

export enum CouponType {
  PERCENT = 'PERCENT',
  FIXED = 'FIXED',
}

@Table
export class Coupon extends Model<Coupon> {
  @Column({
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  })
  code: string;
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  name: string;
  @Column({
    allowNull: true,
    type: DataTypes.TEXT,
  })
  description: string;
  @Column({
    allowNull: false,
    type: DataTypes.ENUM(...Object.values(CouponType)),
  })
  type: CouponType;
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  value: number;
  @Column({
    defaultValue: 0,
    type: DataTypes.INTEGER,
  })
  minOrderAmount: number;
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  maxUses: number;
  @Column({
    defaultValue: 0,
    type: DataTypes.INTEGER,
  })
  currentUses: number;
  @Column({
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  })
  isActice: boolean;
  @Column({
    allowNull: false,
    type: DataTypes.DATE,
  })
  validFrom: Date;
  @Column({
    allowNull: false,
    type: DataTypes.DATE,
  })
  validTo: Date;
  //relationships

  @HasMany(() => UserCoupon)
  userCoupons: UserCoupon[];
}
