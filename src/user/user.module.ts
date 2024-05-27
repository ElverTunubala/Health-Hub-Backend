import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {RoutinesEntity} from '../routines/routines.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RoutinesEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
