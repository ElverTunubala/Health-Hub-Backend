import { Patients_routinesService } from './patients_routines.service';
import { Patients_routinesController } from './patients_routines.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsRoutinesEntity } from './patients_routines.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PatientsRoutinesEntity])],
  controllers: [Patients_routinesController],
  providers: [Patients_routinesService],
})
export class Patients_routinesModule {}
