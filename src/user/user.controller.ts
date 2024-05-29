import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getUser() {
    return await this.userService.getAllUser();
  }

  @Post()
  async addUser(@Body() user: UserDto) {
    return await this.userService.AddUser(user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.deleteUser(id);
  }
}


