import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RoutinesEntity } from '../routines/routines.entity';

@Entity({ name: 'routine_types' })
export class RoutineTypesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // @Column()
  // routine_types_id: number;

  @OneToMany(() => RoutinesEntity, (routine) => routine.routine_type)
  routines: RoutinesEntity[];
}