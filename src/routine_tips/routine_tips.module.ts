import { Routine_tipsService } from './routine_tips.service';
import { Routine_tipsController } from './routine_tips.controller';


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoutineTipsEntity } from './routine_tips.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RoutineTipsEntity])],
    controllers: [
        Routine_tipsController,],
    providers: [
        Routine_tipsService,],
})
export class Routine_tipsModule { }
