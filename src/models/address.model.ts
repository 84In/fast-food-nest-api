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
import { Order } from './order.model';

@Table
export class Address extends Model<Address> {
  @Column({
    allowNull: true,
    type: DataTypes.STRING,
  })
  street: string;
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  city: string;
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  district: string;
  @Column({
    allowNull: true,
    type: DataTypes.STRING,
  })
  ward: string;
  @Column({
    allowNull: false,
    type: DataTypes.FLOAT,
  })
  longitude: number;
  @Column({
    allowNull: false,
    type: DataTypes.FLOAT,
  })
  latitude: number;
  @Column({
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  })
  isDefault: string;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  //relationships
  // Add any relationships here if needed, e.g., associations with other models
  @HasMany(() => Order)
  orders: Order[]; // Assuming an address can be associated with multiple orders
}
