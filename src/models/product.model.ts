import { Category } from './category.model';
import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  name: string;
  @Column({
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  })
  slug: string;
  @Column({
    allowNull: true,
    type: DataTypes.TEXT,
  })
  description: string;
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  basePrice: number;
  @Column({
    allowNull: false,
    type: DataTypes.STRING,
  })
  imageUrl: string;
  @Column({
    defaultValue: true,
    type: DataTypes.BOOLEAN,
  })
  isActive: boolean;
  @Column({
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  })
  isFeatured: boolean;

  @ForeignKey(() => Category)
  @Column({
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  //relationships
  // Add any relationships here if needed, e.g., associations with other models
}
