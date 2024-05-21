import { TypeOrmModule } from '@nestjs/typeorm';
import { PhysiciansController } from './physicians.controller';
import { PhysicianEntity } from './physicians.entity';
import { PhysiciansService } from './physicians.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([PhysicianEntity])]],
    controllers: [
        PhysiciansController,],
    providers: [
        PhysiciansService,],
})
export class PhysiciansModule { }
