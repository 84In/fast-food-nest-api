import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from './category.model';

@Table
export class Ingredient extends Model<Ingredient> {
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  name: string;
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  imageUrl: string;
  @Column({
    allowNull: true,
    type: DataTypes.TEXT,
  })
  description: string;
  @Column({
    defaultValue: 0,
    type: DataTypes.INTEGER,
  })
  price: number;
  @Column({
    defaultValue: true,
    type: DataTypes.BOOLEAN,
  })
  isActive: boolean;

  @Column({
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  })
  isRequired: boolean;
  @ForeignKey(() => Category)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
