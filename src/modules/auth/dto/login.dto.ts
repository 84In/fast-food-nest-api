import { StringRequired } from '@/common/decorators';
import { IsEmail } from 'class-validator';

export class LoginDto {
  @StringRequired('Email')
  @IsEmail(
    {},
    { message: 'Email phải có dạng hợp lệ (ví dụ: example@email.com).' },
  )
  email: string;

  @StringRequired('Mật khẩu')
  password: string;
}
