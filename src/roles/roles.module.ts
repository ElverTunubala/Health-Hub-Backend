import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        RolesController,],
    providers: [
        RolesService,],
})
export class RolesModule { }
