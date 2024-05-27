import { Module } from '@nestjs/common';
import { RoutinesEntity } from './routines.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from '../user/user.entity';
import {RoutineTypesEntity} from '../routine_types/routine_types.entity';
import {UserService} from '../user/user.service';
import {RoutinesService} from './routines.service';
import {RoutinesController} from './routines.controller';


@Module({
    imports: [TypeOrmModule.forFeature([RoutinesEntity, UserEntity, RoutineTypesEntity])],
    controllers: [RoutinesController],
    providers: [RoutinesService, UserService],
})
export class RoutinesModule {}
