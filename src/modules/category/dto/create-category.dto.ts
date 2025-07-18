import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'Tên phải là chuỗi' })
  @IsNotEmpty({ message: 'Không được bỏ trống' })
  name: string;

  @IsString({ message: 'Slug phải là chuỗi' })
  @IsNotEmpty({ message: 'Không được bỏ trống' })
  slug: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  sortOrder?: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
