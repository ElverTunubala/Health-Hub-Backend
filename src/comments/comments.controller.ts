import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsDto } from './comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async addComment(@Body() commentsDto: CommentsDto) {
    return await this.commentsService.addComment(commentsDto);
  }

  @Get()
  async getAllComments() {
    return await this.commentsService.getAllComments();
  }

  @Get(':id')
  async getCommentById(@Param('id') id: number) {
    return await this.commentsService.getCommentById(id);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: number) {
    return await this.commentsService.deleteComment(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async updateComment(
    @Param('id') id: number,
    @Body() commentsDto: CommentsDto,
  ) {
    return await this.commentsService.updateComment(id, commentsDto);
  }
}
