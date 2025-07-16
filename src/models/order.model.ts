import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Address } from './address.model';
import { OrderItem } from './order-item.model';
import { User } from './user.model';
import { Review } from './review.model';

export enum OrderStatus {
  PENDING = 'Đang chờ',
  CONFIRMED = 'Đã xác nhận',
  PREPARING = 'Đang chuẩn bị',
  READY = 'Sẵn sàng',
  DELIVERED = 'Đã giao hàng',
  CANCELLED = 'Đã hủy',
}
export enum PaymentMethod {
  CASH = 'Thanh toán khi nhận hàng',
  ONLINE = 'Thanh toán trực tuyến',
}
export enum PaymentStatus {
  PAID = 'Đã thanh toán',
  FAILED = 'Thanh toán thất bại',
  PENDING = 'Đang chờ thanh toán',
  REFUNDED = 'Đã hoàn tiền',
}

@Table
export class Order extends Model<Order> {
  @Column({
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  })
  orderNumber: string;
  @Column({
    allowNull: false,
    type: DataTypes.ENUM(...Object.values(OrderStatus)),
  })
  status: OrderStatus;
  @Column({
    allowNull: false,
    type: DataTypes.ENUM(...Object.values(PaymentMethod)),
  })
  paymentMethod: PaymentMethod;
  @Column({
    allowNull: false,
    type: DataTypes.ENUM(...Object.values(PaymentStatus)),
  })
  paymentStatus: PaymentStatus;
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  subTotal: number;
  @Column({
    defaultValue: 0,
    type: DataTypes.INTEGER,
  })
  deliveryFee: number;
  @Column({
    defaultValue: 0,
    type: DataTypes.INTEGER,
  })
  díscount: number;
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  total: number;
  @Column({
    allowNull: true,
    type: DataTypes.TEXT,
  })
  notes: string;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Address)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  addressId: number;

  @BelongsTo(() => Address)
  address: Address;

  //relationships
  // Add any relationships here if needed, e.g., associations with other models
  @HasMany(() => OrderItem)
  orderItems: OrderItem[]; // Assuming an order can have multiple items
  @HasMany(() => Review)
  reviews: Review[];
}
