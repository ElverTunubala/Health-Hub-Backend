import { Module } from '@nestjs/common';
import { RoutinesEntity } from './routines.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from '../user/user.entity';
import {RoutineTypesEntity} from '../routine_types/routine_types.entity';
import {UserService} from '../user/user.service';
import {RoutinesService} from './routines.service';


@Module({
    imports: [TypeOrmModule.forFeature([RoutinesEntity, UserEntity, RoutineTypesEntity])],
    controllers: [],
    providers: [RoutinesService, UserService],
})
export class RoutinesModule {}
