import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export const StringRequired = (name: string, example?: string) =>
  applyDecorators(
    ApiProperty({
      description: name,
      example,
      type: String,
      required: true,
    }),
    IsString({ message: `${name} phải là chuỗi` }),
    IsNotEmpty({ message: `${name} không được bỏ trống` }),
  );
export const StringNotRequired = (name?: string, example?: string) =>
  applyDecorators(
    ApiProperty({
      description: name,
      example,
      required: false,
    }),
    IsString(),
    IsOptional(),
  );
export const NumberNotRequired = (name?: string, example?: string) =>
  applyDecorators(
    ApiProperty({
      description: name,
      example,
      required: false,
    }),
    IsNumber(),
    Type(() => Number),
    IsOptional(),
  );

export const BooleanNotRequired = (name?: string, example?: string) =>
  applyDecorators(
    ApiProperty({
      description: name,
      example,
      required: false,
    }),
    IsBoolean(),
    IsOptional(),
  );
