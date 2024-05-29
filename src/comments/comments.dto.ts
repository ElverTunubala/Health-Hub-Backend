import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CommentsDto {
  @IsNotEmpty()
  @IsNumber()
  public user_id: number;

  @IsNotEmpty()
  @IsString()
  public comment: string;
}
