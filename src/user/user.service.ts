import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async AddUser(user: UserDto) {
    const userObjet = new UserEntity();
    userObjet.name = user.name;
    userObjet.email = user.email;
    const new_user = await this.userRepository.save(userObjet);
    return { new_user };
  }
  async getAllUser() {
    return await this.userRepository.find();
  }
  async getUserByID(id: number) {
    return await this.userRepository.findOneBy({ id });
  }
  async deleteUser(id: number) {
    try {
      const result = await this.userRepository.delete(id);
      return result;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user');
    }
  }
}

