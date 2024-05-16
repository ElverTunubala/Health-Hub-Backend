import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthEntity } from './auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import {jwtConstants } from './jwt.constants'


@Module({
  imports: [TypeOrmModule.forFeature([AuthEntity])],
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions:{expiresIn: '60s'},
    
  }),
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
