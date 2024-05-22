import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'patients_routines' })
export class PatientsRoutinesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  routine_types_id: number;

  @Column()
  routine_id: number;
}
