import { IsNumber } from 'class-validator';

export class RolesDto {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

}
