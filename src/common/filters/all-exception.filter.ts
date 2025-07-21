import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { ApiResponse } from '../interface';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const startTime = Number(request['startTime']);
    const endTime = Date.now();
    const takenTime = `${endTime - startTime}ms`;

    let status: number;
    let message: string = 'Có lỗi xảy ra.';
    let error: unknown;

    if (exception instanceof HttpException) {
      //Các lỗi chủ động bắt
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object') {
        const exceptionResponseObj = exceptionResponse as Record<string, any>;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        message =
          exceptionResponseObj.message ||
          exceptionResponseObj.error ||
          'Có lỗi xảy ra.';

        if (Array.isArray(exceptionResponseObj.message)) {
          message = 'Dữ liệu không hợp lệ.';
          error = exceptionResponseObj.message;
        }
      }
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Hệ thống đang có lỗi.';

      this.logger.error(exception);
    }

    const errResponse: ApiResponse<any> = {
      success: false,
      message,
      ...(error && typeof error === 'object'
        ? { error }
        : error !== undefined
          ? { error }
          : {}),
      date: new Date().toLocaleString('vi-VN', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour12: false,
      }),
      path: request.url,
      takenTime,
    };
    response.status(status).json(errResponse);
  }
}
