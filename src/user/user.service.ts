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

  async AddUser(user: UserDto): Promise<any> {
    const userObjet = new UserEntity();
    userObjet.name = user.name;
    userObjet.email = user.email;
    const new_user = await this.userRepository.save(userObjet);
    return { new_user };
  }
  getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  getUserByID(id: number): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id });
  }
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
