/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsRoutinesEntity } from './patientRoutine.entity';
import { PatientRoutineService } from './patientroutine.service';
import { UserModule } from '../user/user.module';
import { RoutinesModule } from 'src/routines/routines.module';
import { PatientRoutineController } from './patientroutine.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PatientsRoutinesEntity]),
    UserModule,
    RoutinesModule,
    ],
    controllers: [PatientRoutineController],
    providers: [PatientRoutineService],
    exports: [PatientRoutineService],
})
export class PatientRoutineModule {}
