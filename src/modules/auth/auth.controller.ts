import { Controller, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('Xác thực')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Xác thực thành công!',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Tài khoản hoặc mật khẩu không hợp lệ!',
  })
  @ApiOperation({
    summary: 'Đăng nhập tài khoản',
  })
  @ApiBody({ type: LoginDto })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return await this.authService.login(req.user);
  }
}
