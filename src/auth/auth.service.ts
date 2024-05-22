import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './register.dto';
import { hash, compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginAuthDto } from './login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/user.entity';
import { RolesEntity } from 'src/roles/roles.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
    private jwtService: JwtService,
    @InjectRepository(RolesEntity)
    private readonly rolesRepository: Repository<RolesEntity>,
  ) {}

  async register(userObject: RegisterAuthDto) {
    const user = new UserEntity();

    const { password } = userObject;
    const plainToHash = await hash(password, 10); //retorna la contraseña encriptada
    userObject = { ...userObject, password: plainToHash };

    const { email, rol_id } = userObject;
    const findEmail = await this.UserRepository.findOne({ where: { email } });
    if (findEmail) throw new HttpException('USER ALREADY EXSITS', 404);

    const role = await this.rolesRepository.findOne({ where: { id: rol_id } });
    if (!role) {
      throw new Error('Role not found');
    }

    user.name = userObject.name;
    user.email = userObject.email;
    user.password = userObject.password;
    user.role = role;
    // user.rol_id = userObject.rol_id;
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
