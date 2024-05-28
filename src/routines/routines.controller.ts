import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoutinesService } from './routines.service';
import { RoutinesDto } from './routines.dto';

@Controller('routines')
export class RoutinesController {
  constructor(private readonly routinesService: RoutinesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async addRoutine(@Body() routinesDto: RoutinesDto) {
    return await this.routinesService.addRoutine(routinesDto);
  }

  @Get()
  async getAllRoutines() {
    return await this.routinesService.getAllRoutines();
  }

  @Get(':id')
  async getRoutineById(@Param('id') id: number) {
    return await this.routinesService.getRoutineById(id);
  }

  @Delete(':id')
  async deleteRoutine(@Param('id') id: number) {
    return await this.routinesService.deleteRoutine(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async updateRoutine(
    @Param('id') id: number,
    @Body() routinesDto: RoutinesDto,
  ) {
    return await this.routinesService.updateRoutine(id, routinesDto);
  }

  // @Patch(':id/followers')
  // async updateFollowers(@Param('id') id: number, @Body('followers') followers: number) {
  //   return await this.routinesService.updateFollowers(id, followers);
  // }

  @Patch(':id/followers')
  async updateFollowers(
    @Param('id') routineId: number,
    @Body('userId') userId: number,
  ) {
    return await this.routinesService.updateFollowers(routineId, userId);
  }
}
