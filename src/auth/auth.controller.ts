import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { RegisterAuthDto } from './register.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './login-auth.dto';
import { IncomingHttpHeaders } from 'http';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject);
  }
  @Post('login')
  loginUser(@Body() userObjectLogin: LoginAuthDto) {
    return this.authService.login(userObjectLogin);
  }

  // @Get('verify')
  // async getAuthVerifyToken(@Req() req: Request): Promise<any> {
  //   const token = req.headers.authorization.split(' ')[1]; // Obtener el token del encabezado de autorización
  //   return await this.authService.verifyToken(token);
  // }
  @Get('verify')
  async getAuthVerifyToken(@Req() req: Request): Promise<any> {
    const headers = req.headers as Headers;
    const token = headers['authorization']?.split(' ')[1]; // Utiliza corchetes para acceder al valor de 'authorization'
    if (!token) {
      throw new Error('Authorization token not found');
    }
    return await this.authService.verifyToken(token);
  }

}
//estamos probando