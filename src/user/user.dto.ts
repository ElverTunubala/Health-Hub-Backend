import { IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsString()
  public email: string;
}
