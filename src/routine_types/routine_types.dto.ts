import { IsNumber, IsString } from 'class-validator';

export class RoutineTypesDto {
  @IsNumber()
  public routine_types_id: number;

  @IsString()
  public name: string;


}


