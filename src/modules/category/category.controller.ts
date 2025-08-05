/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@ApiTags('Danh mục')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Danh mục đã được tạo thành công!',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Danh mục món ăn đã tồn tại!',
  })
  @ApiOperation({
    summary: 'Tạo mới danh mục (Admin Only)',
  })
  @ApiBearerAuth()
  @Post('create')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }

  @UseGuards(JwtGuard)
  @Get('all')
  async getAllCategories(@Req() req: any) {
    console.log(req.user);
    const response = await this.categoryService.findAll();
    // return { message: 'oke' };
    // return response;
    return { message: 'oke', data: response };
  }

  @Get('one/:id')
  async getCategoriesById(@Param('id') id: number) {
    return await this.categoryService.findOne(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Danh mục đã được cập nhật!',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Không tìm thấy danh mục!',
  })
  @ApiOperation({
    summary: 'Cập nhật từng phần của danh mục (Admin Only)',
  })
  @ApiBearerAuth()
  @Patch('update/:id')
  async update(
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Param('id') id: number,
  ) {
    return await this.categoryService.update(updateCategoryDto, id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Danh mục đã được xoá thành công!',
  })
  @ApiOperation({
    summary: 'Xoá danh mục (Admin Only)',
  })
  @ApiBearerAuth()
  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return await this.categoryService.delete(id);
  }
}
