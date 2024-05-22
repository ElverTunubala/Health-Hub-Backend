import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsesService } from './responses.service';

import { Module } from '@nestjs/common';
import { ResponsesEntity } from './responses.entity';
import { ResponsesController } from './responses.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ResponsesEntity])],
    controllers: [ResponsesController],
    providers: [
        ResponsesService,],
})
export class ResponsesModule { }
