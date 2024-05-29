import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { RolesEntity } from 'src/roles/roles.entity';
import { CommentsEntity } from '../comments/comments.entity';
import { ResponsesEntity } from '../responses/responses.entity';
import { RoutinesEntity } from '../routines/routines.entity';
import { RoutinesFollowersUsersEntity } from '../routines/followersUsers.entity';
import { PatientsRoutinesEntity } from '../patients_routines/patients_routines.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // rol_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creatDate: Date;
  // una persona tiene un rol
  @ManyToOne(() => RolesEntity, (role) => role.users)
  role: RolesEntity;
  // una persona puede tener varios comentarios
  @OneToMany(() => CommentsEntity, (comment) => comment.user)
  comments: CommentsEntity[];
  // una persona puede tener varias respuestas
  @OneToMany(() => ResponsesEntity, (response) => response.user)
  response: ResponsesEntity[];
  // una persona con rol de doctor, puede crear varias rutinas
  @OneToMany(() => RoutinesEntity, (routine) => routine.user)
  routines: RoutinesEntity[];
  // Agrega la relación OneToMany con RoutinesFollowersUsersEntity
  @OneToMany(
    () => RoutinesFollowersUsersEntity,
    (routineFollower) => routineFollower.user,
  )
  routinesFollowers: RoutinesFollowersUsersEntity[];

  @OneToMany(() => PatientsRoutinesEntity, (patientsRoutine) => patientsRoutine.user)
  patientsRoutines: PatientsRoutinesEntity[];
}
