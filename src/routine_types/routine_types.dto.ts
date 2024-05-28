import { IsNumber, IsString } from 'class-validator';

export class RoutineTypesDto {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsString()
  public description: string;
}
