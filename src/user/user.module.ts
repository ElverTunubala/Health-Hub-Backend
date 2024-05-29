import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ResponsesEntity} from '../responses/responses.entity';
import {RoutinesEntity} from '../routines/routines.entity';
import { CommentsEntity} from '../comments/comments.entity';
import {  PatientsRoutinesEntity } from '../patients_routines/patients_routines.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ResponsesEntity, RoutinesEntity,  CommentsEntity,  PatientsRoutinesEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
