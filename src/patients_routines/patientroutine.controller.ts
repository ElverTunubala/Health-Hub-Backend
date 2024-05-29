import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PatientRoutineDto } from './patientsRoutines.dto';
import { PatientRoutineService } from './patientroutine.service';

@Controller('patients-routines')
export class PatientRoutineController {
  constructor(private readonly patientsRoutinesService: PatientRoutineService) {}

  @Post()
  async addPatientsRoutine(@Body() patientsRoutinesDto: PatientRoutineDto) {
    return await this.patientsRoutinesService.addPatientsRoutine(
      patientsRoutinesDto,
    );
  }

  @Get()
  async getAllPatientsRoutines() {
    return await this.patientsRoutinesService.getAllPatientsRoutines();
  }

  @Get(':id')
  async getPatientsRoutineById(@Param('id') id: number) {
    return await this.patientsRoutinesService.getPatientsRoutineById(id);
  }

  @Delete(':id')
  async deletePatientsRoutine(@Param('id') id: number) {
    await this.patientsRoutinesService.deletePatientsRoutine(id);
  }

  @Put(':id')
  async updatePatientsRoutine(
    @Param('id') id: number,
    @Body() patientsRoutinesDto: PatientRoutineDto,
  ) {
    return await this.patientsRoutinesService.updatePatientsRoutine(
      id,
      patientsRoutinesDto,
    );
  }
}
