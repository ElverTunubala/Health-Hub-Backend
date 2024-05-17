import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './register.dto';
import { hash, compare } from 'bcrypt';
// import { UserEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginAuthDto } from './login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private readonly UserRepository: Repository<AuthEntity>,
    private jwtService: JwtService,
  ) {}

  async register(userObject: RegisterAuthDto) {
    const user = new AuthEntity();
    
    const { password } = userObject;
    const plainToHash = await hash(password, 10); //retorna la contraseña encriptada
    userObject = { ...userObject, password: plainToHash };
    
    user.name = userObject.name;
    user.email = userObject.email;
    user.password = userObject.password;
    await this.UserRepository.save(user);

    return this.UserRepository.create(userObject);
    // return { new_user };
  }

  async login(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin;
    const findUser = await this.UserRepository.findOne({ where: { email } });

    if (!findUser) throw new HttpException('USER NOT FOUND', 404);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const payload = { id: findUser.id, name: findUser.name };
    const token = this.jwtService.sign(payload);

    const data = {
      user: findUser,
      token,
    };
    return data;
  }
}
