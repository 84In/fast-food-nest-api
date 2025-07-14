import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

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
}
