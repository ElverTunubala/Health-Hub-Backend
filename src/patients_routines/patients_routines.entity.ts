import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'patients_routines' })
export class PatientsRoutinesEntity {
  @PrimaryGeneratedColumn()
  patients_routines_id: number;

  @Column()
  patient_id: number;

  @Column()
  routine_types_id: number;

  @Column()
  routine_id: number;

}
