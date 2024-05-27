import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoutinesEntity } from './routines.entity';
import { RoutinesDto } from './routines.dto';
import { UserEntity } from '../user/user.entity';
import { RoutineTypesEntity } from '../routine_types/routine_types.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class RoutinesService {
  constructor(
    @InjectRepository(RoutinesEntity)
    private readonly routinesRepository: Repository<RoutinesEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoutineTypesEntity)
    private readonly routineTypesRepository: Repository<RoutineTypesEntity>,
    private readonly userService: UserService,
  ) {}

  async addRoutine(routinesDto: RoutinesDto) {
    const routine = new RoutinesEntity();
    const { user_id, routine_types_id } = routinesDto;

    // Se utiliza UserService para obtener el usuario por ID
    const user = await this.userService.getUserByID(user_id);
    if (!user) {
      throw new Error('User not found');
    }

    // Obtener el tipo de rutina por ID
    const routineType = await this.routineTypesRepository.findOneBy({ id: routine_types_id });
    if (!routineType) {
      throw new Error('Routine type not found');
    }

    routine.name = routinesDto.name;
    routine.user = user;
    routine.timeframe = routinesDto.timeframe;
    routine.followers = routinesDto.followers;
    routine.routine_type = routineType;

    const newRoutine = await this.routinesRepository.save(routine);
    return { newRoutine };
  }

  async getAllRoutines() {
    return await this.routinesRepository.find({ relations: ['user', 'routine_type'] });
  }

  async getRoutineById(id: number) {
    return await this.routinesRepository.findOne({ where: { id }, relations: ['user', 'routine_type'] });
  }

  async deleteRoutine(id: number) {
    try {
      const result = await this.routinesRepository.delete(id);
      return result;
    } catch (error) {
      console.error('Error deleting routine:', error);
      throw new Error('Failed to delete routine');
    }
  }

  async updateRoutine(id: number, routinesDto: RoutinesDto) {
    const routine = await this.routinesRepository.findOneBy({ id });
    if (!routine) {
      throw new Error('Routine not found');
    }

    const { user_id, routine_types_id } = routinesDto;

    // Se utiliza UserService para obtener el usuario por ID
    const user = await this.userService.getUserByID(user_id);
    if (!user) {
      throw new Error('User not found');
    }

    // Obtener el tipo de rutina por ID
    const routineType = await this.routineTypesRepository.findOneBy({ id: routine_types_id });
    if (!routineType) {
      throw new Error('Routine type not found');
    }

    routine.name = routinesDto.name;
    routine.user = user;
    routine.timeframe = routinesDto.timeframe;
    routine.followers = routinesDto.followers;
    routine.routine_type = routineType;

    const updatedRoutine = await this.routinesRepository.save(routine);
    return { updatedRoutine };
  }
  // Método para actualizar solo el campo followers
  // async updateFollowers(id: number, followers: number) {
  //   const routine = await this.routinesRepository.findOneBy({ id });
  //   if (!routine) {
  //     throw new Error('Routine not found');
  //   }

  //   routine.followers = followers;
  //   const updatedRoutine = await this.routinesRepository.save(routine);
  //   return { updatedRoutine };
  // }

  async updateFollowers(routineId: number, userId: number) {
    const routine = await this.routinesRepository.findOne({ where: { id: routineId }, relations: ['followersUsers'] });
    if (!routine) {
      throw new Error('Routine not found');
    }

    const user = await this.userService.getUserByID(userId);
    if (!user) {
      throw new Error('User not found');
    }

    if (routine.followersUsers.some(follower => follower.id === user.id)) {
      throw new Error('User has already incremented followers');
    }

    routine.followers += 1;
    routine.followersUsers.push(user);

    const updatedRoutine = await this.routinesRepository.save(routine);
    return { updatedRoutine };
  }
}

