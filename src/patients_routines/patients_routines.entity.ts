import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity }from '../user/user.entity';
import { RoutinesEntity } from '../routines/routines.entity';

@Entity({ name: 'patients_routines' })
export class PatientsRoutinesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  // @Column()
  // routine_types_id: number;

  @Column()
  routine_id: number;

  @ManyToOne(() => UserEntity, (user) => user.patientsRoutines)
  user: UserEntity;

  @ManyToOne(() => RoutinesEntity, (routine) => routine.patientsRoutines)
  routine: RoutinesEntity;
}
