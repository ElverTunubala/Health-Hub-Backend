import { IsNumber } from 'class-validator';

export class PatientsRoutinesDto {
  @IsNumber()
  public patients_routines_id: number;

  @IsNumber()
  public patient_id: number;

  @IsNumber()
  public routine_types_id: number;

  @IsNumber()
  public routine_id: number;
}
