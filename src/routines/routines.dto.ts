import { IsNumber, IsString } from 'class-validator';

export class RoutinesDto {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsNumber()
  public user_id: number;

  @IsString()
  public timeframe: number;

  @IsNumber()
  public followers: number;

  @IsNumber()
  public routine_types_id: number;

}
