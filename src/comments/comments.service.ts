import { Injectable } from '@nestjs/common';
import {CommentsEntity} from './comments.entity';
import {CommentsDto} from  './comments.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {UserService} from '../user/user.service';


@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(CommentsEntity)
        private readonly commentRepository: Repository<CommentsEntity>,
        private readonly userService: UserService
        
      ) {}
      async addComment(commentDto: CommentsDto) {
        const comment = new CommentsEntity();
        const {user_id} = commentDto;
        // se utiliza UserService para obtener el usuario por ID
        const userDto = await this.userService.getUserByID(user_id);
        if (!userDto) {
            throw new Error('User not found');
        }
        comment.comment = commentDto.comment;
        comment.user = userDto;
        
        const newComment = await this.commentRepository.save(comment);
        return { newComment };
      }
    
      async getAllComments() {
        return await this.commentRepository.find();
      }
    
      async getCommentById(id: number) {
        return await this.commentRepository.findOneBy({ id });
      }
    
      async deleteComment(id: number) {
        try {
          const result = await this.commentRepository.delete(id);
          return result;
        } catch (error) {
          console.error('Error deleting comment:', error);
          throw new Error('Failed to delete comment');
        }
      }
    
      async updateComment(id: number, commentDto: CommentsDto) {
        const comment = await this.commentRepository.findOneBy({ id });
        if (!comment) {
          throw new Error('Comment not found');
        }
        const {user_id} = commentDto;
        // se utiliza UserService para obtener el usuario por ID
        const userDto = await this.userService.getUserByID(user_id);
        if (!userDto) {
            throw new Error('User not found');
        }
        comment.comment = commentDto.comment;
        comment.user = userDto;
        const updatedComment = await this.commentRepository.save(comment);
        return { updatedComment };
      }
}
