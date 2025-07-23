import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../interface';
import { Request } from 'express';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  private getDefautlMessage(method: string): string {
    switch (method) {
      case 'POST':
        return 'Tạo mới thành công.'; //created success
      case 'PATCH':
        return 'Cập nhật thành công.'; //updated success
      case 'DELETE':
        return 'Xoá thành công'; //deleted success
      case 'GET':
        return 'Lấy dự liệu thành công.'; //Get data success
      default:
        return 'Yâu cầu đã hoàn thành.'; //complete request
    }
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    const request = context.switchToHttp().getRequest<Request>();

    const startTime = Number(request['startTime']);
    const endTime = Date.now();
    const takenTime = `${endTime - startTime}ms`;

    return next.handle().pipe(
      map((data: unknown) => {
        // If data already matches ApiResponse<T> (has 'success' property), return as is
        if (data && typeof data === 'object' && 'success' in data) {
          return data as ApiResponse<T>;
        }
        let finalMessage = this.getDefautlMessage(request.method);

        if (data && typeof data === 'object' && 'message' in data) {
          finalMessage = data.message as string;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { message, ...rest } = data;

          data = Object.keys(rest).length > 0 ? rest : null;
        }
        if (data && typeof data === 'object' && 'data' in data) {
          data = data.data as T;
        }

        return {
          success: true,
          message: finalMessage,
          data,
          date: new Date().toLocaleString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh',
            hour12: false,
          }),
          path: request.url,
          takenTime,
        } as ApiResponse<T>;
      }),
    );
  }
}
