import { Controller, Get, Post,Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import {UserDto} from './user.dto'
import {User} from './user.entity'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getUser():Promise<User[]>{
    return await this.userService.getAllUser();
  }
  

  @Post()
  async addUser(@Body() user : UserDto): Promise<User>{
    return await this.userService.AddUser(user);
  }

  @Delete(':id')
  async deleteUser(@Param() params){
    return await this.userService.deleteUser(params.id);
  }
}
