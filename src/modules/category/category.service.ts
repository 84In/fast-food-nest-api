import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from '@/models';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import Helper from '@/utils/helper';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private readonly categoryModel: typeof Category,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const alreadyExists = await this.categoryModel.findOne({
      where: {
        slug: Helper.toSlugFromString(createCategoryDto.name),
      },
    });
    if (alreadyExists)
      throw new BadRequestException('Danh mục món ăn đã tồn tại!');
    await this.categoryModel.create(createCategoryDto as any);
    return { message: 'Danh mục đã được tạo thành công!' };
  }

  async findAll() {
    return await this.categoryModel.findAll({
      where: {
        isActive: true,
      },
      order: [['sortOrder', 'ASC']],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'isActive'],
      },
    });
  }
  async findOne(id: number) {
    return await this.categoryModel.findByPk(id);
  }

  async update(updateCategoryDto: UpdateCategoryDto, id: number) {
    const alreadyExists = await this.categoryModel.findByPk(id);

    if (!alreadyExists)
      throw new BadRequestException('Không tìm thấy danh mục');

    await alreadyExists.update(updateCategoryDto);
    return { message: 'Danh mục đã được cập nhật!' };
  }

  async delete(id: number) {
    await this.categoryModel.destroy({ where: { id }, cascade: true });
    return { message: 'Danh mục đã được xoá!' };
  }
}
