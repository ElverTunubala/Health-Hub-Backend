import { Routine_typesController } from './routine_types.controller';
import { Routine_typesService } from './routine_types.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        Routine_typesController,],
    providers: [
        Routine_typesService,],
})
export class Routine_typesModule { }
