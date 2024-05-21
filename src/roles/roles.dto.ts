import { IsNumber } from 'class-validator';

export class RolesDto {
  @IsNumber()
  public role_id: number;

  @IsNumber()
  public physician: number;

  @IsNumber()
  public patient: number;
}
