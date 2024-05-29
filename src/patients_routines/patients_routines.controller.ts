import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Patients_routinesService } from './patients_routines.service';
import { PatientsRoutinesDto } from './patients_routines.dto';

@Controller('patients-routines')
export class Patients_routinesController {
    constructor(private readonly patientsRoutinesService: Patients_routinesService) {}

  @Post()
  async addPatientsRoutine(@Body() patientsRoutinesDto: PatientsRoutinesDto) {
    return await this.patientsRoutinesService.addPatientsRoutine(patientsRoutinesDto);
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
    @Body() patientsRoutinesDto: PatientsRoutinesDto
  ) {
    return await this.patientsRoutinesService.updatePatientsRoutine(id, patientsRoutinesDto);
  }
    
}
