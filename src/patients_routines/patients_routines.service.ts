import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientsRoutinesEntity } from './patients_routines.entity';
import { UserService } from '../user/user.service';
import { RoutinesService } from '../routines/routines.service';
import { PatientsRoutinesDto } from './patients_routines.dto';

@Injectable()
export class Patients_routinesService {
    constructor(
        @InjectRepository(PatientsRoutinesEntity)
        private readonly patientsRoutinesRepository: Repository<PatientsRoutinesEntity>,
        private readonly userService: UserService,
        private readonly routinesService: RoutinesService,
      ) {}
    
      async addPatientsRoutine(patientsRoutinesDto: PatientsRoutinesDto) {
        const patientsRoutine = new PatientsRoutinesEntity();
        const { user_id, routine_id } = patientsRoutinesDto;
    
        const user = await this.userService.getUserByID(user_id);
        if (!user) {
          throw new Error('User not found');
        }
    
        const routine = await this.routinesService.getRoutineById(routine_id);
        if (!routine) {
          throw new Error('Routine not found');
        }
    
        patientsRoutine.user = user;
        patientsRoutine.routine = routine;
    
        const newPatientsRoutine = await this.patientsRoutinesRepository.save(patientsRoutine);
        return newPatientsRoutine;
      }
    
      async getAllPatientsRoutines() {
        return await this.patientsRoutinesRepository.find({ relations: ['user', 'routine'] });
      }
    
      async getPatientsRoutineById(id: number) {
        return await this.patientsRoutinesRepository.findOne({ where: { id }, relations: ['user', 'routine'] });
      }
    
      async deletePatientsRoutine(id: number) {
        try {
          const result = await this.patientsRoutinesRepository.delete(id);
          return result;
        } catch (error) {
          console.error('Error deleting patients routine:', error);
          throw new Error('Failed to delete patients routine');
        }
      }
    
      async updatePatientsRoutine(id: number, patientsRoutinesDto: PatientsRoutinesDto) {
        const patientsRoutine = await this.patientsRoutinesRepository.findOne({ where: { id } });
        if (!patientsRoutine) {
          throw new Error('Patients routine not found');
        }
    
        const { user_id, routine_id } = patientsRoutinesDto;
    
        const user = await this.userService.getUserByID(user_id);
        if (!user) {
          throw new Error('User not found');
        }
    
        const routine = await this.routinesService.getRoutineById(routine_id);
        if (!routine) {
          throw new Error('Routine not found');
        }
    
        patientsRoutine.user = user;
        patientsRoutine.routine = routine;
    
        const updatedPatientsRoutine = await this.patientsRoutinesRepository.save(patientsRoutine);
        return updatedPatientsRoutine;
      }
}
