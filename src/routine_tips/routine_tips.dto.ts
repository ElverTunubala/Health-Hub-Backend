import { IsNumber, IsString } from 'class-validator';

export class RoutineTipsDto {

  @IsNumber()
  public id: number;

  @IsString()
  public name: string;


  @IsNumber()
  public routine_id: number;

}

