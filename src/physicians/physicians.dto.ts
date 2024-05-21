import { IsNumber, IsString } from 'class-validator';

export class PhysiciansDto {
  @IsNumber()
  public id: number;

  @IsString()
  public role_id: number;

  @IsString()
  public name: string;

  @IsString()
  public email: string;
}

