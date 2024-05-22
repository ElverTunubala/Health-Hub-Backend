/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { RoutinesEntity } from './routines.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([RoutinesEntity])],
    controllers: [],
    providers: [],
})
export class RoutinesModule {}
