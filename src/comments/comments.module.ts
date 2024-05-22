import { Module } from '@nestjs/common';
import { CommentsEntity } from './comments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
    imports: [TypeOrmModule.forFeature([CommentsEntity])],
    controllers: [CommentsController],
    providers: [ CommentsService],
})
export class CommentsModule {}
