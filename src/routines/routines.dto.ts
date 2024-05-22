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

  @IsString()
  public followers: number;

  @IsString()
  public routine_types_id: number;

}
