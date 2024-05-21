import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'roles' })
export class RolesEntity {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column()
  physician: number;

  @Column()
  patient: number;
}
