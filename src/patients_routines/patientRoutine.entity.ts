import { RoutinesEntity } from "src/routines/routines.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'patients_routines' })
export class PatientsRoutinesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // user_id: number;

  // @Column()
  // routine_types_id: number;

  // @Column()
  // routine_id: number;

  @ManyToOne(() => UserEntity , (user) => user.patientsRoutines)
  user: UserEntity ;

  @ManyToOne(() => RoutinesEntity, (routine) => routine.patientsRoutines)
  routine: RoutinesEntity;
}