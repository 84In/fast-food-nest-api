import Helper from '@/utils/helper';
import { DataTypes } from 'sequelize';
import {
  BeforeUpdate,
  BeforeValidate,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
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

  @BeforeValidate //Gọi trước khi tạo
  static makeSlug(newCategory: Category) {
    const name = newCategory.dataValues.name; //có instance khởi tạo nằm trong key dataValues cần trỏ vào mới lấy data được
    if (newCategory.isNewRecord && name) {
      const slug = Helper.toSlugFromString(name);
      newCategory.setDataValue('slug', slug);
    }
  }

  @BeforeUpdate
  static updateSlug(updateCategory: Category) {
    if (updateCategory.changed('name')) {
      const name = updateCategory.dataValues.name;
      const slug = Helper.toSlugFromString(name);
      updateCategory.setDataValue('slug', slug);
    }
  }
}
