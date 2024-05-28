import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RoutinesDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsNumber()
  public user_id: number;

  @IsNotEmpty()
  @IsNumber()
  public timeframe: number;

  @IsNumber()
  public followers: number;

  @IsNotEmpty()
  @IsNumber()
  public routine_types_id: number;
}
