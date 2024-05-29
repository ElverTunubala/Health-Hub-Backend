import { IsNumber } from 'class-validator';

export class PatientRoutineDto {
  // @IsNumber()
  // public id: number;

  @IsNumber()
  public user_id: number;

  // @IsNumber()
  // public routine_types_id: number;

  @IsNumber()
  public routine_id: number;
}
