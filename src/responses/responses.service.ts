import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponsesEntity } from './responses.entity';
import { ResponsesDto } from './responses.dto';
import { UserService } from '../user/user.service';
import { CommentsService } from '../comments/comments.service';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectRepository(ResponsesEntity)
    private readonly responseRepository: Repository<ResponsesEntity>,
    private readonly userService: UserService,
    private readonly commentsService: CommentsService,
  ) {}

  async addResponse(responseDto: ResponsesDto) {
    const response = new ResponsesEntity();
    const { user_id, comment_id } = responseDto;

    // Obtener el usuario por ID
    const userDto = await this.userService.getUserByID(user_id);
    if (!userDto) {
      throw new Error('User not found');
    }

    // Obtener el comentario por ID
    const commentDto = await this.commentsService.getCommentById(comment_id);
    if (!commentDto) {
      throw new Error('Comment not found');
    }

    response.response = responseDto.response;
    response.user = userDto;
    response.comment = commentDto;

    const newResponse = await this.responseRepository.save(response);
    return { newResponse };
  }

  async getAllResponses() {
    return await this.responseRepository.find();
  }

  async getResponseById(id: number) {
    return await this.responseRepository.findOneBy({ id });
  }

  async deleteResponse(id: number) {
    try {
      const result = await this.responseRepository.delete(id);
      return result;
    } catch (error) {
      console.error('Error deleting response:', error);
      throw new Error('Failed to delete response');
    }
  }

  async updateResponse(id: number, responseDto: ResponsesDto) {
    const response = await this.responseRepository.findOneBy({ id });
    if (!response) {
      throw new Error('Response not found');
    }

    const { user_id, comment_id } = responseDto;

    // Obtener el usuario por ID
    const userDto = await this.userService.getUserByID(user_id);
    if (!userDto) {
      throw new Error('User not found');
    }

    // Obtener el comentario por ID
    const commentDto = await this.commentsService.getCommentById(comment_id);
    if (!commentDto) {
      throw new Error('Comment not found');
    }

    response.response = responseDto.response;
    response.user = userDto;
    response.comment = commentDto;

    const updatedResponse = await this.responseRepository.save(response);
    return { updatedResponse };
  }
}
