import { IsNumber, IsString } from 'class-validator';

export class CommentsDto {
  @IsNumber()
  public id: number;

  @IsNumber()
  public user_id: number;

  @IsString()
  public comment: string;

}

