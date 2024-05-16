import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './register.dto';
import { hash, compare } from 'bcrypt';
import { UserEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginAuthDto } from './login-auth.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService{
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository:Repository<UserEntity>,
    private jwtService: JwtService
  ) {}

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10); //retorna la contraseña encriptada
    userObject = {...userObject, password: plainToHash};
    return this.UserRepository.create(userObject)
  }

  async login(userObjectLogin:LoginAuthDto) {
    const {email, password} = userObjectLogin;
    const findUser = await this.UserRepository.findOne({where: { email }});

    if (!findUser) { throw new HttpException('USER NOT FOUND',404);

    const checkPassword = await compare(password, findUser.password);

    if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT',403);

    const data = findUser;
 }
}
