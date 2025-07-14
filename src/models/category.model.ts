import { DataTypes } from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Product } from './product.model';

@Table
export class Category extends Model<Category> {
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
    defaultValue: 0,
    type: DataTypes.INTEGER,
  })
  sortOrder: number;
  @Column({
    defaultValue: true,
    type: DataTypes.BOOLEAN,
  })
  isActive: boolean;
  //relationships
  // Add any relationships here if needed, e.g., associations with other models
  @HasMany(() => Product)
  products: Product[];
}
