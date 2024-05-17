import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Controller('userEntity')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getUser(): Promise<UserEntity[]> {
    return await this.userService.getAllUser();
  }

  @Post()
  async addUser(@Body() user: UserDto): Promise<UserEntity> {
    return await this.userService.AddUser(user);
  }

  @Delete(':id')
  async deleteUser(@Param() params) {
    return await this.userService.deleteUser(params.id);
  }
}
