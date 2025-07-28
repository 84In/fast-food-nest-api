import { StringRequired } from '@/common/decorators';

export class CreateUserDto {
  @StringRequired('Tên khách hàng')
  name: string;

  @StringRequired('Email')
  email: string;

  @StringRequired('Mật khẩu')
  password: string;
}
