import { TypeOrmModule } from '@nestjs/typeorm';
import { Routine_typesController } from './routine_types.controller';
import { RoutineTypesEntity } from './routine_types.entity';
import { Routine_typesService } from './routine_types.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([RoutineTypesEntity])],
    controllers: [
        Routine_typesController,],
    providers: [
        Routine_typesService,],
})
export class Routine_typesModule {}
