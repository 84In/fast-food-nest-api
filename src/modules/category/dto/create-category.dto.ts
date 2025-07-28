import {
  BooleanNotRequired,
  NumberNotRequired,
  StringNotRequired,
  StringRequired,
} from '@/common/decorators';

export class CreateCategoryDto {
  @StringRequired('Tên danh mục', 'Pizza')
  name: string;

  @StringNotRequired('Mô tả danh mục')
  description?: string;

  @NumberNotRequired('Ưu tiên sắp xếp')
  sortOrder?: number;

  @BooleanNotRequired('Trạng thái danh mục')
  isActive?: boolean;
}
