import { DataTypes } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { Product } from './product.model';
import { Order } from './order.model';

@Table
export class Review extends Model<Review> {
  @Column({
    allowNull: true,
    type: DataTypes.TEXT,
  })
  comment: string;

  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
  })
  rating: number;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  userId: number;

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
}
