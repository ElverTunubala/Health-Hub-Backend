import { Controller, Get } from '@nestjs/common';

@Controller()
export class RolesController {
    @Get()
    findAll() {
        return [{id: 1, name: 'physician'}, {id: 2, name: 'patient'}]
    }
}
