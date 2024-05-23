import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsesService } from './responses.service';
import { Module } from '@nestjs/common';
import { ResponsesEntity } from './responses.entity';
import { ResponsesController } from './responses.controller';
import { CommentsEntity } from 'src/comments/comments.entity';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { CommentsService } from '../comments/comments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResponsesEntity, CommentsEntity, UserEntity]),
  ],
  controllers: [ResponsesController],
  providers: [ResponsesService, UserService, CommentsService],
})
export class ResponsesModule {}
