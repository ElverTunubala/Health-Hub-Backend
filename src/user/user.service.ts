import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import {UserDto} from './user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async AddUser(user:UserDto): Promise<any>{
    let userObjet = new User();
    userObjet.name = user.name;
    userObjet.email = user.email;
    const new_user = await this.userRepository.save(userObjet)
    return {new_user};
  }
  getAllUser(): Promise<User[]>{
    return this.userRepository.find();
  }
  getUserByID(id:number):Promise<User>{
    return this.userRepository.findOneBy({id});
  }
  async deleteUser(id:number):Promise<void>{
    await this.userRepository.delete(id);
  }
}


