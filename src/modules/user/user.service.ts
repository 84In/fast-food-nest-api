import { User } from '@/models';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async findByEmail(email: string) {
    return await this.userModel.findOne({ where: { email } });
  }

  async validateUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (!user) throw new BadRequestException('Đăng nhập thất bại!');
    //Because passwords are stored as hashes, we need to verify them using a secure comparison method.
    const isCorrectPassword = user.comparePassword(password);
    if (!isCorrectPassword)
      throw new BadRequestException('Đăng nhập thất bại!');

    // //return access token (JWT)
    const plainUser = user.getUserWithoutPassword() as {
      id: number;
      role: string;
    };

    return { id: plainUser.id, role: plainUser.role };
  }

  async register(createUserDto: CreateUserDto) {
    const alreadyExist = await this.findByEmail(createUserDto.email);
    if (alreadyExist) throw new BadRequestException('Tài khoản đã tồn tại!');

    await this.userModel.create(createUserDto as any);

    return { message: 'Đăng ký thành công!' };
  }
}
