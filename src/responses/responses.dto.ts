import { IsNumber, IsString } from 'class-validator';

export class ResponsesDto {
  @IsNumber()
  public id: number;

  @IsNumber()
  public comment_id: number;

  @IsNumber()
  public user_id: number;

  @IsString()
  public response: string;
}
