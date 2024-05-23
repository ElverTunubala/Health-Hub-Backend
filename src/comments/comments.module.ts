import { Module } from '@nestjs/common';
import { CommentsEntity } from './comments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommentsEntity, UserEntity])],
  controllers: [CommentsController],
  providers: [CommentsService,UserService],
})
export class CommentsModule {}
