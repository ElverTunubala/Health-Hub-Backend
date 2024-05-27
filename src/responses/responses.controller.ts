import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { ResponsesDto } from './responses.dto';

@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Post()
  async addResponse(@Body() responseDto: ResponsesDto) {
    try {
      const newResponse = await this.responsesService.addResponse(responseDto);
      return newResponse;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async getAllResponses() {
    try {
      const responses = await this.responsesService.getAllResponses();
      return responses;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getResponseById(@Param('id') id: number) {
    try {
      const response = await this.responsesService.getResponseById(id);
      if (!response) {
        throw new HttpException('Response not found', HttpStatus.NOT_FOUND);
      }
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async deleteResponse(@Param('id') id: number) {
    try {
      const result = await this.responsesService.deleteResponse(id);
      if (result.affected === 0) {
        throw new HttpException('Response not found', HttpStatus.NOT_FOUND);
      }
      return { message: 'Response deleted successfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  async updateResponse(
    @Param('id') id: number,
    @Body() responseDto: ResponsesDto,
  ) {
    try {
      const updatedResponse = await this.responsesService.updateResponse(
        id,
        responseDto,
      );
      return updatedResponse;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
