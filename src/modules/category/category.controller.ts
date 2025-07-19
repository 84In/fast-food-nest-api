import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }

  @Get('all')
  async getAllCategories() {
    const response = await this.categoryService.findAll();
    // return { message: 'oke' };
    // return response;
    return { message: 'oke', data: response };
  }

  @Get('one/:id')
  async getCategoriesById(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryService.findOne(id);
  }
}
